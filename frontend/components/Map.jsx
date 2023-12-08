"use client"
import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';
import { FadeLoader, SyncLoader } from 'react-spinners';

export async function getServerSideProps() {
    const resStations = await fetch('http://localhost:4000/api/stations');
    const stations = await resStations.json();

    const resConnections = await fetch('http://localhost:4000/api/connections');
    const connections = await resConnections.json();

    return {
        props: { stations, connections },
    };
}

export const Map = ({ stations, connections }) => {
    const svgRef = useRef();
    const margin = { top: 20, right: 50, bottom: 20, left: 50 };
    const width = 1200
    const height = 1200

    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    const [routeData, setRouteData] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    const handleOriginChange = (event) => {
        setOrigin(event.target.value)
    }

    const handleDestinationChange = (event) => {
        setDestination(event.target.value)
    }
    const lineColors = {
        A: 'red',
        B: 'blue',
        C: 'yellow',
        D: 'green'
    };

    useEffect(() => {
        if (stations.length === 0 || connections.length === 0) {
            return;
        }

        const svg = d3.select(svgRef.current)
            .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)

        svg.selectAll("line.connection").remove();

        let g = svg.select("g");
        if (g.empty()) {
            g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
        }

        svg.selectAll("*").remove()
        
        const longitudeExtent = d3.extent(stations, d => d.longitude);
        const latitudeExtent = d3.extent(stations, d => d.latitude);

        const padding = 0.005;
        longitudeExtent[0] -= padding;
        longitudeExtent[1] += padding;
        latitudeExtent[0] -= padding;
        latitudeExtent[1] += padding;

        const xScale = d3.scaleLinear()
            .domain(longitudeExtent)
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain(latitudeExtent)
            .range([height, 0]);

        const routeStationNames = routeData ? routeData.route.map(station => station.name) : [];

        connections.forEach(connection => {
            const source = stations.find(station => station.name === connection.origin._name);
            const target = stations.find(station => station.name === connection.destination._name);

            if (source && target) {
                const isConnectionInRoute = routeStationNames.includes(source.name) && routeStationNames.includes(target.name);
                // Ahora el color de la línea se determina por la conexión, no por la estación
                const strokeColor = isConnectionInRoute ? lineColors[connection.line] : 'grey';
                const strokeWidth = isConnectionInRoute ? 2 : 1;
                svg.append("line")
                    .classed("connection", true)
                    .attr("x1", xScale(source.longitude))
                    .attr("y1", yScale(source.latitude))
                    .attr("x2", xScale(target.longitude))
                    .attr("y2", yScale(target.latitude))
                    .attr("stroke", strokeColor)
                    .attr("stroke-width", strokeWidth);
            }
        });

        let tooltip = d3.select('.tooltip');
        if (tooltip.empty()) {
            tooltip = d3.select('body').append('div')
                .attr('class', 'tooltip')
                .style('position', 'absolute')
                .style('visibility', 'hidden')
                .style('background', '#FFF')
                .style('border', '1px solid #ddd')
                .style('border-radius', '5px')
                .style('padding', '5px')
                .style('pointer-events', 'none'); // Asegura que el tooltip no intercepte los eventos del mouse
        }
        // Dibujar estaciones y nombres
        stations.forEach(station => {
            const group = svg.append("g"); // Grupo para el círculo y el texto
            const maxLength = 12;
            const text = station.name.length > maxLength ? station.name.substring(0, maxLength) + "..." : station.name

            const yScaleText = station.name == "Minimes Théatres Romains" ? yScale(station.latitude) + 12 : yScale(station.latitude) - 10

            group.append("circle")
                .attr("cx", xScale(station.longitude))
                .attr("cy", yScale(station.latitude))
                .attr("r", 5)
                .attr("fill", "black")
                .attr("stroke", "white")
                .attr("stroke-width", 1)

            group.append("text")
                .attr("x", xScale(station.longitude))
                .attr("y", yScaleText)
                .text(text)
                .attr("font-size", "12px")
                .attr("text-anchor", "ligth")
                .attr("alignment-baseline", "middle")
                .attr("fill", "white");

            group.on('mouseover', (event) => {
                tooltip.style('visibility', 'visible')
                    .text(station.name)
                    .style('left', `${event.pageX + 14}px`)
                    .style('top', `${event.pageY - 28}px`);
            })
                .on('mousemove', (event) => {
                    tooltip.style('left', `${event.pageX + 14}px`)
                        .style('top', `${event.pageY - 28}px`);
                })
                .on('mouseout', () => {
                    tooltip.style('visibility', 'hidden');
                });
        });
        setIsLoading(false)

    }, [stations, connections, routeData, origin, destination]);

    useEffect(() => {
        if (origin && destination) {
            fetch(`http://localhost:4000/api/route/${origin}/${destination}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('ERROR: Respuesta de red')
                    }
                    return response.json()
                })
                .then(data => {
                    setRouteData(data)
                })
                .catch(error => {
                    console.error('Hubo un problema con la petición Fetch:', error)
                })
        }
    }, [origin, destination]);

    const renderRouteDetails = () => {
        if (!routeData) return null;
    
        const { route, totalTime } = routeData;
    
        return (
            <div className="border rounded-lg w-fit m-auto mt-10 px-10 py-5 flex flex-col bg-gray-800 border-gray-700">
                <h3 className='font-semibold'>Ruta desde <span className='underline'>{origin}</span> hasta <span className='underline'>{destination}</span>:</h3>
                <ul className='mt-2 list-none'>
                    {route.map((station, index) => {
                        let lineColor = 'white';
    
                        // Si no es la última estación, usa la conexión a la siguiente estación para el color
                        if (index < route.length - 1) {
                            const nextStation = route[index + 1];
                            const connection = connections.find(con => con.origin._name === station.name && con.destination._name === nextStation.name);
                            lineColor = connection ? lineColors[connection.line] : 'white';
                        } else {
                            // Si es la última estación, usa la conexión desde la estación anterior
                            const prevStation = route[index - 1];
                            const connection = connections.find(con => con.origin._name === prevStation.name && con.destination._name === station.name);
                            lineColor = connection ? lineColors[connection.line] : 'white';
                        }
    
                        return (
                            <li key={index} className="station-item flex items-center mt-2">
                                <span className="line-dot mr-2 inline-block h-4 w-4 rounded-full" style={{ backgroundColor: lineColor }}></span>
                                {station.name}
                            </li>
                        );
                    })}
                </ul>
                <div className='mt-4'>
                    Tiempo total de viaje: <span className='font-semibold'>{totalTime} minutos.</span>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className='m-auto justify-center flex mt-10 w-[80%] text-center text-3xl font-bold'>
                <h1>Metro de Lyon</h1>
            </div>
            <div className='m-auto justify-center flex mt-5 w-[80%] text-center text-lg'>
                <h2>Selecciona dos estaciones para calcular su ruta óptima con el Algoritmo A*</h2>
            </div>
            <div className='flex justify-around w-[80%] max-w-[800px] m-auto mt-5 gap-2'>

                <select className="min-w-[270px] bg-gray-800 text-white border border-gray-700 rounded p-2" value={origin} onChange={handleOriginChange}>
                    <option value="">Estación de Origen</option>
                    {stations.map(station => (
                        <option key={station.name} value={station.name}>{station.name}</option>
                    ))}
                </select>

                <select className="min-w-[270px] bg-gray-800 text-white border border-gray-700 rounded p-2" value={destination} onChange={handleDestinationChange}>
                    <option value="">Estación de Destino</option>
                    {stations.map(station => (
                        <option key={station.name} value={station.name}>{station.name}</option>
                    ))}
                </select>

            </div>
            
            {renderRouteDetails()}

            {isLoading ? (
                <div className='mt-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <SyncLoader color="white" />
                </div>
            ) : (
                <div className='mt-2'>
                    <svg ref={svgRef} className='block max-w-[1200px] h-auto m-auto max-h-[1200px] w-[95%]' />
                </div>
            )}

            <div className='tooltip' style={{ position: 'absolute ', visibility: 'hidden' }}></div>
        </>
    )
}

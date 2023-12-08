const Connection = require('./Connection')
const Station = require('./Station')
const PriorityQueue = require('priorityqueuejs')

class Graph {
    constructor() {
        this.adjacencies = new Map()
        this.transbordoTime = 5;
    }

    addStation(station) {
        if (!this.adjacencies.has(station)) {
            this.adjacencies.set(station, []);
        }
    }

    addConnection(origin, destination, time, line) {
        const connections = this.adjacencies.get(origin) || [];
        connections.push(new Connection(destination, time, line));
        this.adjacencies.set(origin, connections);
    }

    getStations() {
        return [...this.adjacencies.keys()]
    }

    getConnections(station) {
        return this.adjacencies.get(station) || []
    }

    getAllConnections() {
        let allConnections = [];
        this.adjacencies.forEach((connections, station) => {
            connections.forEach(connection => {
                allConnections.push({
                    origin: station,
                    destination: connection.destination,
                    time: connection.time,
                    line: connection.line
                });
            });
        });
        return allConnections;
    }

    static heuristic(current, goal) {
        let distance = current.distanceEuclidean(goal);
        const TRANSFER_PENALTY = 4; 
        if (current.line !== goal.line) {
            distance += TRANSFER_PENALTY;
        }
        return distance;
    }

    aStar(start, goal) {
        let frontier = [{ node: start, priority: 0 }];
        let cameFrom = new Map();
        let costSoFar = new Map();

        costSoFar.set(start, 0);

        while (frontier.length > 0) {
            // Ordenar la frontera por prioridad y tomar el primer elemento
            frontier.sort((a, b) => a.priority - b.priority);
            let current = frontier.shift().node;

            if (current.name === goal.name) {
                return {
                    path: this.reconstructPath(cameFrom, current),
                    totalTime: costSoFar.get(current)
                };
            }

            this.getConnections(current).forEach(connection => {
                let next = connection.destination;
                let newCost = costSoFar.get(current) + connection.time;

                // Si es la primera vez que visitamos 'next' o encontramos un camino más barato
                if (!costSoFar.has(next) || newCost < costSoFar.get(next)) {
                    // Sumar el tiempo de transbordo si se cambia de línea.
                    if (cameFrom.has(current)) {
                        let lastConnection = cameFrom.get(current);
                        if (this.getConnections(lastConnection).some(conn => conn.destination === current) && 
                            this.getConnections(current).some(conn => conn.destination === next && conn.line !== connection.line)) {
                            newCost += this.transbordoTime;
                        }
                    }
                    
                    costSoFar.set(next, newCost);
                    let priority = newCost + Graph.heuristic(next, goal); // Asume que Graph.heuristic es una función estática.
                    frontier.push({ node: next, priority: priority });
                    cameFrom.set(next, current);
                }
            });
        }

        return { path: null, totalTime: 0 };
    }

    reconstructPath(cameFrom, current) {
        const path = []
        while (current) {
            path.unshift(current);
            current = cameFrom.get(current)
        }
        return path
    }
}

module.exports = Graph
"use client"
import { Map } from "@/components/Map";
import { useEffect, useState } from "react";

export default function Home() {
    const [stations, setStations] = useState([]);
    const [connections, setConnections] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resStations = await fetch('http://localhost:4000/api/stations');
            const stationsData = await resStations.json();
            setStations(stationsData);

            const resConnections = await fetch('http://localhost:4000/api/connections');
            const connectionsData = await resConnections.json();
            setConnections(connectionsData);
        }

        fetchData();
    }, []);

    return (
        <main>
            <Map stations={stations} connections={connections}/>
        </main>
    )
}

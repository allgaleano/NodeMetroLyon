const express = require('express')

const router = express.Router()
const metro = require('../data/initMetro')

router.get('/stations', (req, res) => {
    const stations = metro.getStations()
    res.json(stations.map(station => ({
        name: station.name,
        latitude: station.latitude,
        longitude: station.longitude
    })))
})
router.get('/stations/:name/connections', (req, res) => {
    console.log('Request received for: ', req.path)
    if (!req.params.name) {
        return res.status(400).json({ message: 'Se requieren el nombre de la estación' });
    }
    const stationName = req.params.name.toLowerCase();

    const stations = metro.getStations();
    if (!stations) {
        return res.status(500).json({ message: 'Error al recuperar las estaciones' });
    }

    const station = stations.find(st =>
        st.name &&
        st.name.toLowerCase() === stationName
    );

    if (!station) {
        return res.status(404).json({ message: 'Estación no encontrada en la línea especificada' });
    }

    const connections = metro.getConnections(station);
    if (connections.length === 0) {
        return res.status(404).json({ message: 'No hay conexiones para esta estación en la línea especificada' });
    }

    res.json(connections);
})

router.get('/connections', (req, res) => {
    const connections = metro.getAllConnections();
    if(!connections) {
        return res.status(500).json({ message: 'Error al recuperar las conexiones '})
    }
    res.json(connections)
})

router.get('/route/:startStation/:endStation', (req, res) => {
    const startName = req.params.startStation.toLowerCase()
    const endName = req.params.endStation.toLowerCase()

    const startStation = metro.getStations().find(st => st.name.toLowerCase() === startName)
    const endStation = metro.getStations().find(st => st.name.toLowerCase() === endName)

    if (!startStation || !endStation) {
        return res.status(404).json({ message: 'Una o ambas estaciones no se encontraron' })
    }

    const result = metro.aStar(startStation, endStation);

    if (!result.path || result.path.length === 0) {
        return res.status(404).json({ message: 'No se encontró una ruta entre las estaciones proporcionadas' })
    }

    const routeDetails = result.path.map(station => ({
        name: station.name,
        latitude: station.latitude,
        longitude: station.longitude
    }));

    res.json({
        route: routeDetails,
        totalTime: result.totalTime
    });
})

module.exports = router
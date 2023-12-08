const Connection = require('./Connection')
const Station = require('./Station')
const PriorityQueue = require('priorityqueuejs')

class Graph {
    constructor() {
        this.adjacencies = new Map()
    }

    addStation(station) {
        if (!this.adjacencies.has(station)) {
            this.adjacencies.set(station, []);
        }
    }

    addConnection(origin, destination, time) {
        const connections = this.adjacencies.get(origin) || [];
        connections.push(new Connection(destination, time));
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
                    time: connection.time
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
        const frontier = new PriorityQueue((a, b) => a.priority - b.priority);
        const cameFrom = new Map();
        const costSoFar = new Map();

        frontier.enq({ node: start, priority: 0 });
        costSoFar.set(start, 0);

        while (!frontier.isEmpty()) {
            const current = frontier.deq().node;

            if (current.name === goal.name) {
                return {
                    path: this.reconstructPath(cameFrom, current),
                    totalTime: costSoFar.get(current)
                };
            }

            this.getConnections(current).forEach(connection => {
                const next = connection.destination;
                const newCost = costSoFar.get(current) + connection.time;

                if (!costSoFar.has(next) || newCost < costSoFar.get(next)) {
                    costSoFar.set(next, newCost);
                    const priority = newCost + Graph.heuristic(next, goal);
                    frontier.enq({ node: next, priority: priority });
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
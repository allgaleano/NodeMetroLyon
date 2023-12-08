require('dotenv').config()
const express = require('express')
const metroRoutes = require('./routes/metroRoutes')
const cors = require('cors')

// express app
const app = express()

app.use(cors())

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api', metroRoutes)

// listening for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
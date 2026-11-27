const express = require('express')
const app = express()
app.get('/', (req, res) => res.send(`<!doctype html><title>Shipyard Node test</title><h1>Express on ms.computer</h1><p>Its start script was <code>nodemon server.js</code>, which ms.computer refuses; Shipyard's fix changed it to <code>node server.js</code>. Server time: ${new Date().toISOString()}</p>`))
app.listen(process.env.PORT || 3000)

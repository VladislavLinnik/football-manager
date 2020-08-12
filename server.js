const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000
const buildIndexPath = 'dist/football-manager/index.html'

// Getting our TEAMS routes
// const teams = require('./server/routes/teams')

// Using middleware
// app.use(express.static(path.join(__dirname, 'dist')))
// app.use('/api/teams', teams)

// Catch all other routes and return it to index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, buildIndexPath))
// })

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
})

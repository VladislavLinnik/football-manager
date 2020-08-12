const express = require('express')
const router = express.Router()

// GET TEAMS
router.get('/api/teams', (req, res) => {
  res.send('TEAMS works')
})

module.exports = router

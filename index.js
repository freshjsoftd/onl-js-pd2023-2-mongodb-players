require('dotenv').config()
const express = require('express')


const dbMongo = require('./src/models')
const {players} = require('./src/constants')

const {Player} = dbMongo;

const app = express()

app.use(express.json())

const createPlayers = async () => {
  await Player.insertMany(players)
}

// createPlayers()

const PORT  = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
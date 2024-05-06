const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')

const environments = require('./environments')
const envs = environments.environments()

const routes = require(path.resolve(path.join(envs.BaseDir, 'routes/routes')))

const app = express()

app.set('views', path.resolve(path.join(envs.BaseDir, 'views')))
app.set('view engine', 'ejs')

app.use(express.static(path.resolve(path.join(envs.BaseDir, 'public/'))))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', routes)

module.exports = app
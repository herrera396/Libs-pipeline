console.log('ROUTES - OK')

const environments = require('../../config/environments')
const envs = environments.environments()
const path = require('path')
const baseDir = envs.BaseDir

const express = require('express')
const router = express.Router()

const indexController = require(path.resolve(path.join(baseDir, 'controllers/indexController')))

/// ///////////////// INDEX ////////////////////
router.get('/', indexController.index)

module.exports = router
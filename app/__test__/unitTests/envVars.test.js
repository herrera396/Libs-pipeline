/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
require('dotenv').config()
require('mocha-sinon')
const environments = require('../../../config/environments')
const envs = environments.environments()
const path = require('path')
const app = require(path.resolve(envs.BaseDir, '../config/serverConfig'))
const chai = require('chai')
const chaiHttp = require('chai-http')
const chaiDOM = require('chai-dom')
const sinonChai = require('sinon-chai')
const chaiFetch = require('chai-fetch')
const expect = require('chai').expect
const should = chai.should()
const sinon = require('sinon')

chai.use(chaiHttp)
chai.use(chaiDOM)
chai.use(sinonChai)
chai.use(chaiFetch)

describe('Teste no arquivo ENVIRONMENTS', function () {
  let sandbox
  let envs
  beforeEach(function () {
    sandbox = sinon.createSandbox()
    envs = sandbox.spy(environments, 'environments')
  })
  afterEach(function () {
    sandbox.restore()
  })
  it('Deve retornar o ambiênte como PRODUCTION', function (done) {
    process.env.NODE_ENV = 'production'
    chai.request(app)
      .get('/')
      .send(envs())
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.status(200)
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        chai.expect(envs().calledOnce)
        done()
      })
  })
  it('Deve retornar o ambiênte como DEVELOPMENT', function (done) {
    process.env.NODE_ENV = 'development'
    chai.request(app)
      .get('/')
      .send(envs())
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.status(200)
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        chai.expect(envs().calledOnce)
        done()
      })
  })
  it('Deve retornar o ambiênte como TEST', function (done) {
    process.env.NODE_ENV = 'test'
    chai.request(app)
      .get('/')
      .send(envs())
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.status(200)
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        chai.expect(envs().calledOnce)
        done()
      })
  })
})
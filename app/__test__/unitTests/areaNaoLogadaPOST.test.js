/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
require('dotenv').config()
require('jsdom-global')()
const environments = require('../../../config/environments')
const envs = environments.environments()
const path = require('path')
const app = require(path.resolve(envs.BaseDir, '../config/serverConfig'))
const chai = require('chai')
const chaiHttp = require('chai-http')
const chaiDOM = require('chai-dom')
const sinonChai = require('sinon-chai')
const chaiFetch = require('chai-fetch')
const should = chai.should()
const sinon = require('sinon')
const { assert, spy } = require('chai')
const fs = require('fs')

chai.use(chaiHttp)
chai.use(chaiDOM)
chai.use(sinonChai)
chai.use(chaiFetch)

const indexController = require(path.resolve(path.join(envs.BaseDir, 'controllers/indexController')))
const devOpsSquadController = require(path.resolve(path.join(envs.BaseDir, 'controllers/devOpsSquadController')))
const devOpsSkillIndividualController = require(path.resolve(path.join(envs.BaseDir, 'controllers/devOpsSkillIndividualController')))
const geraisAssessmentController = require(path.resolve(path.join(envs.BaseDir, 'controllers/geraisAssessmentController')))

describe('Teste nas ROTAS NÃO LOGADAS (POST - 200)', () => {
  let sandbox
  beforeEach(function () {
    sandbox = sinon.createSandbox()
  })
  afterEach(function () {
    sandbox.restore()
  })
  it('01 - devOpsSquad/graficos - deve retornar 200', (done) => {
    const graficosSquad = sandbox.spy(devOpsSquadController, 'graficosSquad')
    const payload = {
      user_name: 'lalala',
      user_email: 'teste@claro.com.br',
      position: 'TPM',
      squad_name: 'dockerham',
      product_name: 'lalala product'
    }
    chai.request(app)
      .post('/devOpsSquad/graficos')
      .send(payload)
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        chai.expect(graficosSquad.calledOnce)
        done()
      })
  })
  it('02 - devOpsSkillIndividual/graficos - deve retornar 200', (done) => {
    const graficosDevOpsSkillIndividual = sandbox.spy(devOpsSkillIndividualController, 'graficosIndividual')
    const payload = {
      user_name: 'lalala',
      user_email: 'teste@claro.com.br',
      role: 'cloud_architect',
      aws_cloud: 'on',
      squad_name: 'dockerham'
    }
    chai.request(app)
      .post('/devOpsSkillIndividual/graficos')
      .send(payload)
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        chai.expect(graficosDevOpsSkillIndividual.calledOnce)
        done()
      })
  })
  it('03 - geraisAssessment/graficos - deve retornar 200', (done) => {
    const graficosGeraisAssessmentController = sandbox.spy(geraisAssessmentController, 'graficosGeraisAssessment')
    const payload = {
      user_name: 'lalala',
      user_email: 'teste@claro.com.br',
      role: 'cloud_architect',
      squad_name: 'dockerham'
    }
    chai.request(app)
      .post('/geraisAssessment/graficos')
      .send(payload)
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        chai.expect(graficosGeraisAssessmentController.calledOnce)
        done()
      })
  })
  it('04 - devOpsSquad/relatorios - deve retornar 200', (done) => {
    const relatoriosdevOpsSquadController = sandbox.spy(devOpsSquadController, 'relatoriosSquad')
    const payload = {
      squad_name: 'dockerham'
    }
    chai.request(app)
      .post('/devOpsSquad/relatorios')
      .send(payload)
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        chai.expect(relatoriosdevOpsSquadController.calledOnce)
        done()
      })
  })
  it('05 - geraisAssessment/relatorios - deve retornar 200', (done) => {
    const relatoriosGeraisAssessmentController = sandbox.spy(geraisAssessmentController, 'relatoriosGeraisAssessment')
    const payload = {
      squad_name: 'dockerham'
    }
    chai.request(app)
      .post('/geraisAssessment/relatorios')
      .send(payload)
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        chai.expect(relatoriosGeraisAssessmentController.calledOnce)
        done()
      })
  })
  it('06 - devOpsSkillIndividual/relatorios - deve retornar 200', (done) => {
    const relatoriosdevOpsSkillIndividualController = sandbox.spy(devOpsSkillIndividualController, 'relatoriosIndividual')
    const payload = {
      squad_name: 'dockerham'
    }
    chai.request(app)
      .post('/devOpsSkillIndividual/relatorios')
      .send(payload)
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        chai.expect(relatoriosdevOpsSkillIndividualController.calledOnce)
        done()
      })
  })
  it('07 - relatorios - deve retornar 200', (done) => {
    const relatoriosindexController = sandbox.spy(indexController, 'relatoriosForm')
    const a = 'assessmentDevOpsSquad'
    const b = 'assessmentDevOpsIndividual'
    const c = 'assessmentGerais'
    const payload = {
      nome_produto: 'lalala'
    }
    chai.request(app)
      .post('/relatorios')
      .send(payload)
      .end((err, res) => {
        console.log('ERROS: ', err)
        if (payload.nome_produto === a) {
          res.should.have.property('status', 200)
          res.should.to.be.html
          res.text.should.contain('Assessment DevOps - SQUAD - Relatórios')
        } else if (payload.nome_produto === b) {
          res.should.have.property('status', 200)
          res.should.to.be.html
          res.text.should.contain('Assessment DevOps - Skill Individual - Relatórios')
        } else if (payload.nome_produto === c) {
          res.should.have.property('status', 200)
          res.should.to.be.html
          res.text.should.contain('Assessment DevOps - Assessment Gerais - Relatórios')
        } else {
          res.should.have.property('status', 404)
          res.should.to.be.html
          res.text.should.contain('Maturidade DevOps - Erro 404')
        }
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        chai.expect(relatoriosindexController.calledOnce)
        done()
      })
  })
})
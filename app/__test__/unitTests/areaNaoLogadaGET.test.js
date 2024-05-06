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

describe('Teste nas ROTAS NÃO LOGADAS (GET - 200)', () => {
  it('01 - / - deve retornar 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Portal de Serviços - CCoE')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
  it('02 - healthcheck - deve retornar 200', (done) => {
    chai.request(app)
      .get('/healthcheck')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Maturidade DevOps - Health Check Page')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
  it('03 - relatórios - deve retornar 200', (done) => {
    chai.request(app)
      .get('/relatorios')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Página de Relatórios Gerais - CCoE')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
  it('04 - 404 - deve retornar 200', (done) => {
    chai.request(app)
      .get('/404')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Maturidade DevOps - Erro 404')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
  it('05 - 500 - deve retornar 200', (done) => {
    chai.request(app)
      .get('/500')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Maturidade DevOps - Erro 500')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
  it('06 - devOpsSquad/index - deve retornar 200', (done) => {
    chai.request(app)
      .get('/devOpsSquad/index')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Assessment DevOps - SQUAD')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
  it('07 - devOpsSquad/graficos - deve retornar 200', (done) => {
    chai.request(app)
      .get('/devOpsSquad/graficos')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Assessment DevOps - SQUAD - Gráficos')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
  it('08 - devOpsSquad/relatorios - deve retornar 200', (done) => {
    chai.request(app)
      .get('/devOpsSquad/relatorios')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Assessment DevOps - SQUAD - Relatórios')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
  it('09 - devOpsSkillIndividual/index - deve retornar 200', (done) => {
    chai.request(app)
      .get('/devOpsSkillIndividual/index')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Assessment DevOps - Skill Individual')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
  it('10 - devOpsSkillIndividual/graficos - deve retornar 200', (done) => {
    chai.request(app)
      .get('/devOpsSkillIndividual/graficos')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Assessment DevOps - Skill Individual - Gráficos')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
  it('11 - devOpsSkillIndividual/relatorios - deve retornar 200', (done) => {
    chai.request(app)
      .get('/devOpsSkillIndividual/relatorios')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Assessment DevOps - Skill Individual - Relatórios')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
  it('12 - geraisAssessment/index - deve retornar 200', (done) => {
    chai.request(app)
      .get('/geraisAssessment/index')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Assessment DevOps - Gerais')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
  it('13 - geraisAssessment/graficos - deve retornar 200', (done) => {
    chai.request(app)
      .get('/geraisAssessment/graficos')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Assessment DevOps - Assessment Gerais - Gráficos')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
  it('14 - geraisAssessment/relatorios - deve retornar 200', (done) => {
    chai.request(app)
      .get('/geraisAssessment/relatorios')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 200)
        res.should.to.be.html
        res.text.should.contain('Assessment DevOps - Assessment Gerais - Relatórios')
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
})

describe('TESTE DE ERRO 404', () => {
  it('01 - /lala - deve retornar 404', (done) => {
    chai.request(app)
      .get('/lala')
      .end((err, res) => {
        console.log('ERROS: ', err)
        res.should.have.property('status', 404)
        res.should.to.be.html
        chai.expect(res.header['content-type']).to.have.string('text/html; charset=utf-8')
        done()
      })
  })
})
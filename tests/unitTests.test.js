/* eslint-disable no-undef */
const status = require('http-status');
const chai = require('chai');
const shell = require('shelljs');

const { expect } = chai;
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);

describe('Test signUp Route', () => {
  let signUpResponse;
  const signUpCorrectBody = {
    name: 'signUpTest',
    password: 'signUpTest',
  };
  const signUpIncorrectBody = {
    name: 'signUpTest',
  };
  before(() => {
    shell.exec('npx sequelize db:migrate:undo:all');
    shell.exec('npx sequelize db:migrate');
  });
  it('Validate with Correct Body, returns a token', async () => {
    signUpResponse = await chai.request(app)
      .post('/signup')
      .send(signUpCorrectBody);
    const { status: responseStatus, body: { token } } = signUpResponse;
    expect(responseStatus).to.be.equal(status.CREATED);
    expect(token).to.not.be.equal(undefined);
  });
  it('Validate with Incorrect Body, does not returns a token', async () => {
    signUpResponse = await chai.request(app)
      .post('/signup')
      .send(signUpIncorrectBody);
    const { status: responseStatus, body: { token } } = signUpResponse;
    expect(responseStatus).to.be.equal(status.BAD_REQUEST);
    expect(token).to.be.equal(undefined);
  });
});

describe('Test logIn Route', () => {
  let logInResponse;
  const logInCorrectBody = {
    name: 'loginTest',
    password: 'loginTest',
  };
  before(async () => {
    shell.exec('npx sequelize db:migrate:undo:all');
    shell.exec('npx sequelize db:migrate');
    signUpResponse = await chai.request(app)
      .post('/signup')
      .send(logInCorrectBody);
  });
  it('Validate with Correct Body, returns a token', async () => {
    logInResponse = await chai.request(app)
      .post('/login')
      .send(logInCorrectBody);
    const { status: responseStatus, body: { token } } = logInResponse;
    expect(responseStatus).to.be.equal(status.OK);
    expect(token).to.not.be.equal(undefined);
  });
  it('Validate with Incorret Body, does not returns a token', async () => {
    logInResponse = await chai.request(app)
      .post('/login')
      .send({
        name: 'testName22',
      });
    const { status: responseStatus, body: { token } } = logInResponse;
    expect(responseStatus).to.be.equal(status.BAD_REQUEST);
    expect(token).to.be.equal(undefined);
  });
});

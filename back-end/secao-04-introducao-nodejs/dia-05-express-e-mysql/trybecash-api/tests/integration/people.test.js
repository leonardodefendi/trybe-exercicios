const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

describe('Testando os endpoints de people', () => {
  it('Testando o cadastro de uma pessoa', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
    const response = await chai
      .request(app)
      .post('/people')
      .send(
        {
          firstName: 'Luke',
          lastName: 'Skywalker',
          email: 'luke.skywalker@trybe.com',
          phone: '851 678 4453',
        },
      );
    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep
      .equal({ message: 'Pessoa cadastrada com sucesso com o id 42' });
  });
  afterEach(sinon.restore);
});
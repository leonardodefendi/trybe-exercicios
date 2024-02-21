import { CepApi } from "./FooCepApi";

class MockCepApi implements CepApi {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `The mock adress for cep ${cep}, n° ${number} is mocked address`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `The mock cep for address: ${address}, n° ${number} is mocked cep`;
  }
}

export default MockCepApi;
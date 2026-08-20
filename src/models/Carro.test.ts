import { Carro } from './Carro';

describe('Modelo Carro', () => {
    it('deve criar um carro com nome e tipo', () => {
        const nomeDoCarro = 'Nissan GTR';
        const tipoDoCarro = 'Esportivo Gran Turismo';

        const carro = new Carro(nomeDoCarro, tipoDoCarro);

        expect(carro.nome).toBe('Nissan GTR')
        expect(carro.tipo).toBe('Esportivo Gran Turismo')
        expect(carro.id).toBeNull();
    })
})
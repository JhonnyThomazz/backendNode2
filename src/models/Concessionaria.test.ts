import { Concessionaria } from './Concessionaria';

describe('Modelo concessionaria', () => {
    it('deve criar uma concessionaria com nome, cnpj e cidade', () => {
        const nomeDaConcessionaria = 'Velmax';
        const cnpjDaConcessionaria = '1001100121210';
        const cidadeDaConcessionaria = 'Itapetininga'

        const concessionaria = new Concessionaria(nomeDaConcessionaria, cnpjDaConcessionaria, cidadeDaConcessionaria);

        expect(concessionaria.nome).toBe('Velmax')
        expect(concessionaria.cnpj).toBe('1001100121210')
        expect(concessionaria.cidade).toBe('Itapetininga')
        expect(concessionaria.id).toBeNull();
    })
})
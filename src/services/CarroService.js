import { Carro } from "@/src/models/Carro"

export class CarroService { 
    constructor(repository) {
        this.repository = repository;
    }

    async SaveService(nome, tipo) {
        if (!nome || nome.lenght < 2)
            throw new Error("O nome deve ter no mínimo 2 caracteres")
        if (!tipo)
            throw new Error("O tipo do veículo é obrigatório")
        return await this.repository.Save(new Carro(nome, tipo))
    }

    async GetAll() {
        return await this.repository.GetAll();
    }

    async GetByIdService(id) {
        const carro = await this.repository.GetById(id);
        if(!carro) throw new Error("Veículo não encontrado")
            return carro;
    }

    async Update(id, nome, tipo) {
        if(!id)
            throw new Error("ID é obrigatório para permitir a atualização")
        if(!nome || !tipo)
            throw new Error("Nome e tipo do veículo são obrigatórios")
    }

    async Delete(id) {
        await this.GetById(id); 
        return await this.repository.Delete(id);
    }
}
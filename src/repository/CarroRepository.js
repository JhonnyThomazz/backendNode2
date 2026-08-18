import prisma from '@/src/lib/prisma';
import { Carro } from '@/src/models/Carro';

export class CarroRepository {
    async Save(obj) {
        return await prisma.carro.create({
            data: { nome: obj.nome, tipo: obj.tipo }
        });
    }

    async GetAll() {
        const dados = await prisma.carro.findMany();
        return dados.map(d => new Carro(d.nome, d.tipo, d.id));
    }

    async GetById(id) {
        const dado = await prisma.carro.findUnique({
            where: { id: Number(id) }
        });
        if (!dado) return null;
        return new Carro(dado.nome, dado.tipo, dado.id);
    }

    async Update(id, obj) {
        return await prisma.carro.update({
            where: { id: Number(id) },
            data: { nome: obj.nome, tipo: obj.tipo},
        });
    }

    async Delete(id) {
        return await prisma.carro.Delete({
            where: { id: Number(id) }
        });
    }
}
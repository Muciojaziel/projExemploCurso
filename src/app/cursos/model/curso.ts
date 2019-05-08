export class Curso {
    id?: number;
    nome: string;
    valor: string;

    constructor(id, nome, valor) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
    }
}
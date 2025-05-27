import User from "./user.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role = "docente", ativo = "true") {
        super(nome, email, nascimento, role, ativo)
  }

aprovarEstudante(estudante, curso) {
    return `estudante ${estudante} passou no curso de ${curso}, responsável ${this.nome}.`
  }
}

const novaDocente = new Docente("Agata", "a@gmail.com", "2024-01-01")
//console.log(novaDocente.aprovarEstudante('Filipe', 'JavaScript'));
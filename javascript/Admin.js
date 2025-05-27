import User from "./user.js";

export default class Admin extends User{
    constructor(nome, email, nascimento, role = "admin", ativo = "true") {
        super(nome, email, nascimento, role, ativo) // Chama o construtor da classe pai (User) para inicializar as propriedades herdadas (nome, email, nascimento, role e ativo).
  }

   criarCurso(nomeCurso, qtdVagas) {
    return `curso ${nomeCurso} criado com ${qtdVagas} vagas.`
  }


}

const novoAdmin = new Admin("Rebeca", "Rebeca@gmail.com", "2024-01-01")
//console.log(novoAdmin.nome);
//console.log(novoAdmin.criarCurso('javascript', 30));




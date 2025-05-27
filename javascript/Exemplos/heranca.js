const user = {
    nome: 'Filipe',
    email: 'Filipe@gmail.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
        
    }
}

const admin = {
  nome: "Rebeca",
  email: "Rebeca@gmail.com",
  nascimento: "2024-01-01",
  role: "admin",
  ativo: true,
  criarCurso: function () {
    console.log('curso criado');
  },
};

Object.setPrototypeOf(admin, user) // Define 'user' como protótipo de 'admin', permitindo que 'admin' herde propriedades e métodos de 'user'.
admin.criarCurso()
admin.exibirInfos()
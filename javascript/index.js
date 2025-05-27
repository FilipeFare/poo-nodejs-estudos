import User from "./user.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Filipe", "filipe@gmail.com", "2024-01-01")

console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Rebeca", "Rebeca@gmail.com", "2024-01-01")

console.log(novoAdmin.exibirInfos());

const novoDocente = new Docente("Gabriel", "Gabriel@gmail.com", "2024-01-01")

console.log(novoDocente.exibirInfos());




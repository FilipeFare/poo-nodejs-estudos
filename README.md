📘 Projeto de Aprendizado em Orientação a Objetos com Node.js

Este projeto foi desenvolvido com o objetivo de praticar e aprender os conceitos de Programação Orientada a Objetos (POO) utilizando JavaScript com Node.js. O código implementa classes com herança, encapsulamento e modularização, explorando diferentes tipos de usuários como User, Admin e Docente.
💡 Motivação

Este projeto surgiu como parte do meu processo de aprendizado prático em JavaScript moderno, com foco em aplicar os principais pilares da Programação Orientada a Objetos no contexto do Node.js. A ideia foi construir um conjunto de classes reutilizáveis e simular cenários comuns de software, como permissões de usuário e papéis administrativos.
📁 Estrutura do Projeto

    user.js: Classe base User com propriedades e métodos comuns.

    Admin.js: Classe Admin que herda de User e implementa comportamentos específicos.

    Docente.js: Classe Docente que também herda de User e possui funcionalidades próprias.

    index.js: Arquivo principal para executar e testar o funcionamento das classes.

    heranca.js / new.js: Exemplos básicos isolados para fins de aprendizado e prática com orientação a objetos.

    package.json: Metadados do projeto e configuração do tipo de módulo como ESModules.

🚀 Como Executar

    Certifique-se de ter o Node.js instalado.

    Navegue até a pasta do projeto no terminal.

    Execute o arquivo principal com o seguinte comando:

    node index.js

🛠️ Tecnologias Utilizadas

    Node.js – Ambiente de execução JavaScript no lado do servidor

    ESModules – Sistema de módulos modernos do JavaScript (import/export)

    JavaScript – Sintaxe moderna com classes, herança e métodos

🧠 Conceitos Praticados

    Classes e Objetos

    Herança

    Encapsulamento

    Modularização com ESModules

    Métodos personalizados

📌 Aprendizados

Durante o desenvolvimento, reforcei os seguintes conceitos:

    Modelagem de classes e responsabilidades: como estruturar classes pensando em reutilização e extensão.

    Herança e polimorfismo: criação de subclasses que estendem o comportamento da classe base.

    Separação de responsabilidades: divisão do código em arquivos distintos para facilitar leitura e manutenção.

    Execução modular com ESModules: uso de import e export para conectar arquivos de forma limpa e moderna.

🔄 Possíveis Melhorias Futuras

    Criar testes automatizados com Jest ou Vitest para validar os comportamentos das classes.

    Adicionar uma interface via terminal (CLI) para interação dinâmica com os objetos.

    Implementar persistência em arquivo JSON ou banco de dados para simular um CRUD.

✍️ Autor

Projeto criado para fins de estudo. Desenvolvido por Filipe Fare.

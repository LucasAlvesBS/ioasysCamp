const readline = require('readline');
const formInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const bancoDeDados = new Map();

bancoDeDados.set("Lucas Alves", {
    nome: "Lucas Alves",
    idade: 27,
    nacionalidade: "Brasileira",
    estado: "Sergipe",
    cidade: "Aracaju",
    formacao: "ioasysCamp"
});

bancoDeDados.set("Alirio dos Santos", {
    nome: "Alirio dos Santos",
    idade: 40,
    nacionalidade: "Brasileira",
    estado: "Bahia",
    cidade: "Salvador",
    formacao: "ioasysCamp"
});

const formulario = async () => {
    console.log(`
    Preencha os dados solicitados para saber se o 
    usuário já está cadastrado no banco de dados.
    `);
    let nomeUsuario, idadeUsuario, nacionalidadeUsuario; 
    let estadoUsuario, cidadeUsuario, formacaoUsuario;
    await new Promise (resolve => 
        formInterface.question("Nome: ", nomeInput => 
            resolve(nomeUsuario = nomeInput))
    );
    await new Promise (resolve => 
        formInterface.question("Idade: ", idadeInput => 
            resolve(idadeUsuario = idadeInput))
    );
    idadeUsuario = Number(idadeUsuario);
    await new Promise (resolve => 
        formInterface.question("Nacionalidade: ", nacionalidadeInput => 
            resolve(nacionalidadeUsuario = nacionalidadeInput))
    );
    await new Promise (resolve => 
        formInterface.question("Estado: ", estadoInput => 
            resolve(estadoUsuario = estadoInput))
    );
    await new Promise (resolve => 
        formInterface.question("Cidade: ", cidadeInput => 
            resolve(cidadeUsuario = cidadeInput))
    );
    await new Promise (resolve => 
        formInterface.question("Formação: ", formacaoInput => 
            resolve(formacaoUsuario = formacaoInput))
    );
    
    const informacoesUsuario = Object.assign({}, 
        {nome: nomeUsuario}, 
        {idade: idadeUsuario},
        {nacionalidade: nacionalidadeUsuario},
        {estado: estadoUsuario},
        {cidade: cidadeUsuario},
        {formacao: formacaoUsuario}
    )
    
    const pessoasRegistradas = nome => {
        if (JSON.stringify(informacoesUsuario) === JSON.stringify(bancoDeDados.get(nome = nomeUsuario))) {
            console.log("\nO usuário informado já consta no banco de dados.\n");
        } else console.log("\nO usuário solicitado não foi encontrado no banco de dados.\n")
    }
    
    pessoasRegistradas();
    await new Promise(resolve => 
        formInterface.question("Quer continuar? Caso positivo, digite 'sim': ", resposta => {
            resolve(resposta.toLowerCase() === "sim" | resposta.toLowerCase() === "s"  
                ? formulario() 
                : formInterface.close());
        })
    )
}

formulario();
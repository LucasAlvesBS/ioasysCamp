const readline = require('readline');
const formInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function* colocaID() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

const gen = colocaID();

const bancoDeDados = new Map();

bancoDeDados.set(gen.next().value, {
    nome: "lucas alves",
    idade: 27,
    nacionalidade: "brasileira",
    estado: "sergipe",
    cidade: "aracaju",
    formacao: "ioasyscamp"
});

bancoDeDados.set(gen.next().value, {
    nome: "alirio dos santos",
    idade: 40,
    nacionalidade: "brasileira",
    estado: "bahia",
    cidade: "salvador",
    formacao: "ioasyscamp"
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
            resolve(nomeUsuario = nomeInput.toLowerCase()))
    );
    await new Promise (resolve => 
        formInterface.question("Idade: ", idadeInput => 
            resolve(idadeUsuario = idadeInput))
    );
    idadeUsuario = Number(idadeUsuario);
    await new Promise (resolve => 
        formInterface.question("Nacionalidade: ", nacionalidadeInput => 
            resolve(nacionalidadeUsuario = nacionalidadeInput.toLowerCase()))
    );
    await new Promise (resolve => 
        formInterface.question("Estado: ", estadoInput => 
            resolve(estadoUsuario = estadoInput.toLowerCase()))
    );
    await new Promise (resolve => 
        formInterface.question("Cidade: ", cidadeInput => 
            resolve(cidadeUsuario = cidadeInput.toLowerCase()))
    );
    await new Promise (resolve => 
        formInterface.question("Formação: ", formacaoInput => 
            resolve(formacaoUsuario = formacaoInput.toLowerCase()))
    );
    
    const informacoesUsuario = Object.assign({}, 
        {nome: nomeUsuario}, 
        {idade: idadeUsuario},
        {nacionalidade: nacionalidadeUsuario},
        {estado: estadoUsuario},
        {cidade: cidadeUsuario},
        {formacao: formacaoUsuario}
    )
    
    let validacao;
    for (let value of bancoDeDados.values()) {
        if (JSON.stringify(informacoesUsuario) === JSON.stringify(value))
            validacao = true;
    } 
    
    validacao === true
        ? console.log("\nO usuário informado já consta no banco de dados.\n")
        : console.log("\nO usuário solicitado não foi encontrado no banco de dados.\n");
    
    await new Promise(resolve => 
        formInterface.question("Quer continuar? Caso positivo, digite 'sim' ou 's': ", resposta => {
            resolve(resposta.toLowerCase() === "sim" | resposta.toLowerCase() === "s"  
                ? formulario() 
                : formInterface.close());
        })
    );
}

formulario();
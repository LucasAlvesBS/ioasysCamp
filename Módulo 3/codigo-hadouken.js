const nome = "Lucas Alves";
const idade = 27;
const nacionalidade = "Brasileira";
const estado = "Sergipe";
const cidade = "Aracaju";
const formacao = "ioasysCamp";

const cadastroUsuario = () => {  
    if (nome === "Lucas Alves") {
        if (idade === 27) {
            if (nacionalidade === "Brasileira") {
                if (estado === "Sergipe") {
                    if (cidade === "Aracaju") {
                        if (formacao === "ioasysCamp") {
                            console.log("Cadastrado!");
                        } else console.log("Não cadastrado!");
                    } else console.log("Não cadastrado!");
                } else console.log("Não cadastrado!");
            } else console.log("Não cadastrado!");
        } else console.log("Não cadastrado!");
    } else console.log("Não cadastrado!");
}

cadastroUsuario();
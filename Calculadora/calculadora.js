/*****************************************************************************
 * calculadora.js
 *
 * Ioasys Camp: Módulo 2 - JavaScript Básico
 * Lucas Alves Batista Santos
 *
 * Criação de uma calculadora simples em JavaScript
 ****************************************************************************/

// Importando 'readline'
const readline = require('readline');
const calcInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Operadores disponíveis para cálculo
const operadoresValidos = [
    "+",
    "-",
    "*",
    "/",
    "^",
    "%",
    "raiz",
    "!"
];

// Cálculo realizado de acordo com a operação escolhida
const operacoesMatematicas = {
    '+': (primeiroInput, segundoInput) => primeiroInput + segundoInput, // Soma
    '-': (primeiroInput, segundoInput) => primeiroInput - segundoInput, // Subtração
    '*': (primeiroInput, segundoInput) => primeiroInput * segundoInput, // Multiplicação
    '/': (primeiroInput, segundoInput) => primeiroInput / segundoInput, // Divisão
    '^': (primeiroInput, segundoInput) => Math.pow(primeiroInput, segundoInput), // Potência
    '%': (primeiroInput, segundoInput) => primeiroInput % segundoInput, // Resto
    'raiz': (primeiroInput) => Math.sqrt(primeiroInput), // Raiz quadrada
    '!': (primeiroInput) => {
        let fatorial = primeiroInput;
        for (let i = primeiroInput - 1; i >= 1; i--) fatorial *= i;
        return fatorial; // Fatorial        
    }
}

let calculoMatematico = (primeiroInput, operacao, segundoInput) => {
    return operacoesMatematicas[operacao](primeiroInput, segundoInput);
}

console.log(`
Instruções da calculadora:

    Soma: use o símbolo '+',
    Subtração: use o símbolo '-',
    Multiplicação: use o símbolo '*',  
    Divisão: use o símbolo '/',
    Potência: use o símbolo '^',
    Resto: use o símbolo '%',
    Raiz quadrada: use a palavra 'raiz',
    Fatorial: use o símbolo '!'    
`);

const calculadoraJS = () => { 

    // Requisição do primeiro número
    calcInterface.question("\nDigite o primeiro número: ", (primeiroInput) => {
        const primeiroNumero = Number(primeiroInput);
        if (isNaN(primeiroNumero)) {
            console.log("Erro! Número inválido!");
            return calculadoraJS();
        }

        // Requisição do operador numérico
        calcInterface.question("Digite a operação matemática: ", (operadorInput) => {
            if (!(operadoresValidos.includes(operadorInput))) {
                console.log("Erro! Operador inválido!");
                return calculadoraJS();
            }
            // Resultado das operações em que apenas o primeiro número é necessário
            if (operadorInput === "!") {
                const resultadoFatorial = calculoMatematico(primeiroNumero, operadorInput);
                console.log(`O resultado do cálculo é: ${resultadoFatorial}\n`);
                calcInterface.question("Você quer continuar? Caso positivo, digite 'sim': ", (resposta) => {
                    resposta.toLowerCase() === "sim" ? calculadoraJS() : calcInterface.close();
                }); 
            }
            if (operadorInput === "raiz") {
                const resultadoRaiz = calculoMatematico(primeiroNumero, operadorInput);
                console.log(`O resultado do cálculo é: ${resultadoRaiz}\n`);
                calcInterface.question("Você quer continuar? Caso positivo, digite 'sim': ", (resposta) => {
                    resposta.toLowerCase() === "sim" ? calculadoraJS() : calcInterface.close();
                }); 
            } 

            // Requisição do segundo número
            calcInterface.question("Digite o segundo número: ", (segundoInput) => {
                const segundoNumero = Number(segundoInput);
                if (isNaN(segundoNumero)) {
                    console.log("Erro! Número inválido!");
                    return calculadoraJS();
                }
                
                const resultado = calculoMatematico(primeiroNumero, operadorInput, segundoNumero);
                // Bloqueando valores negativos para casos específicos
                if (operadorInput === "^" && segundoInput < 0) {
                    console.log("Erro! O Expoente deve ser positivo!");
                    return calculadoraJS();
                } 
                else if (operadorInput === "%" && primeiroInput < 0 || segundoInput < 0) {
                    console.log("Erro! Para calcular o resto, os valores precisam ser positivos!");
                    return calculadoraJS();
                } 
                // Resultado das operações que utilizam o segundo número
                else {
                    console.log(`O resultado do cálculo é: ${resultado}\n`);
                    calcInterface.question("Você quer continuar? Caso positivo, digite 'sim': ", (resposta) => {
                        resposta.toLowerCase() === "sim" ? calculadoraJS() : calcInterface.close();
                    }); 
                }    
            });  
        });
    });
}

calculadoraJS();
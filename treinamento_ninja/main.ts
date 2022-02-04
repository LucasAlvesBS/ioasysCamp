import Personagem from "./Personagem";
import prompt from "prompt-sync";
import Hyuuga from "./Hyuuga";
import Uchiha from "./Uchiha";

let hyuuga: Personagem = new Hyuuga("Neji Hyuuga");
let uchiha: Personagem = new Uchiha("Sasuke Uchiha");

let teclado = prompt();
let option: number = 0;

enum ScreenOptions {
    Taijutsu = 1,
    Ninjutsu = 2,
    Genjutsu = 3,
    Batalha = 4,
    Descanso = 5,
    Corrida = 6,
    TecnicaSecreta = 7,
    Atributos = 8
}

const estadoClinico = () => {
    if (hyuuga.machucarSe() && !uchiha.machucarSe())
        throw `Chakra e/ou Resistência física abaixo de zero. ${hyuuga.nome} foi hospitalizado!`;
    else if (uchiha.machucarSe() && !hyuuga.machucarSe())
        throw `Chakra e/ou Resistência física abaixo de zero. ${uchiha.nome} foi hospitalizado!`;
    else if (hyuuga.machucarSe() && uchiha.machucarSe())
        throw `Chakra e/ou Resistência física abaixo de zero. ${hyuuga.nome} e ${uchiha.nome} foram hospitalizados!`;
}

const vencedorCorrida = () => {
    if (hyuuga.correr() > uchiha.correr())
        console.log(`
        Velocidade do ${hyuuga.nome}: ${hyuuga.velocidade.toFixed(1)} km/h
        Velocidade do ${uchiha.nome}: ${uchiha.velocidade.toFixed(1)} km/h\n
        ${hyuuga.nome} venceu!\n`);
                 
    else if (uchiha.correr() > hyuuga.correr())
        console.log(`
        Velocidade do ${uchiha.nome}: ${uchiha.velocidade.toFixed(1)} km/h
        Velocidade do ${hyuuga.nome}: ${hyuuga.velocidade.toFixed(1)} km/h\n
        ${uchiha.nome} venceu!\n`);

    else
        console.log(`
        Velocidade do ${uchiha.nome}: ${uchiha.velocidade.toFixed(1)} km/h
        Velocidade do ${hyuuga.nome}: ${hyuuga.velocidade.toFixed(1)} km/h\n
        Empate!\n`);
}

while (option != 9) {
    estadoClinico();
    
    console.log(`+========= Treinamento Ninja ==========+`);
    console.log("1. Treinar taijutsu                    |");
    console.log("2. Treinar ninjutsu                    |");
    console.log("3. Treinar genjutsu                    |");
    console.log("4. Entrar em batalha                   |");
    console.log("5. Descansar                           |");
    console.log("6. Participar de corrida ninja         |");
    console.log("7. Usar kekkei genkai                  |");
    console.log("8. Imprimir atributos                  |");
    console.log("9. Sair                                |");
    console.log("+======================================+");

    option = +teclado("Escolha uma ação: ")

    switch (option) {
        case ScreenOptions.Taijutsu:
            console.log(hyuuga.treinarTaijutsu());
            console.log(uchiha.treinarTaijutsu());
            break;
        case ScreenOptions.Ninjutsu:
            console.log(hyuuga.treinarNinjutsu());
            console.log(uchiha.treinarNinjutsu());
            break;
        case ScreenOptions.Genjutsu:
            console.log(hyuuga.treinarGenjutsu());
            console.log(uchiha.treinarGenjutsu());
            break;
        case ScreenOptions.Batalha:
            console.log(hyuuga.batalhar());
            console.log(uchiha.batalhar());
            break;
        case ScreenOptions.Descanso:
            let tempo: number = +teclado("Horas de descanso: ");
            console.log(hyuuga.descansar(tempo));
            console.log(uchiha.descansar(tempo));
            break;
        case ScreenOptions.Corrida:
            vencedorCorrida();
            break;
        case ScreenOptions.TecnicaSecreta:
            console.log(hyuuga.atacar()); 
            console.log(uchiha.atacar());   
            break;
        case ScreenOptions.Atributos:
            console.log(hyuuga.status());
            console.log(uchiha.status());
            break;
        default: 
            break;
    }
}
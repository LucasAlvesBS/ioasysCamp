import Personagem from "./Personagem";
import Util from "./Util";

export default class Uchiha extends Personagem {
    private _sharingan: number; 

    constructor(nome: string) {
        super(nome);
        this._nome = nome;
        this._taijutsu = Util.definirAtributos(50, 250);
        this._ninjutsu = Util.definirAtributos(100, 1_000);
        this._genjutsu = Util.definirAtributos(300, 500);
        this._sharingan = Util.definirAtributos(100, 1_000);
    }

    public status(): string {
        return (`
Ninja:

    Nome: ${this._nome}
    Taijutsu: ${this._taijutsu.toFixed(1)} 
    Ninjutsu: ${this._ninjutsu.toFixed(1)} 
    Genjutsu: ${this._genjutsu.toFixed(1)}
    Resistência Física: ${this._resistenciaFisica.toFixed(1)} 
    Chakra: ${this._chakra.toFixed(1)} 
    Velocidade na última corrida: ${this._velocidade.toFixed(1)} km/h
    Sharingan: ${this._sharingan.toFixed(1)}`
        );
    } 

    public atacar(): string {
        let diminuirChakra = this.randomizar(1_000);
        this._chakra -= diminuirChakra;
        return `\nSharingan - Chidori com força de ${this._sharingan.toFixed(1)}
            Consumo de chakra: ${diminuirChakra.toFixed(1)}\n`;
    }
}
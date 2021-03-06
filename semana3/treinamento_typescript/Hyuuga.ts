import Personagem from "./Personagem";
import Random from "./Random";

export default class Hyuuga extends Personagem {
    private _byakugan: number;

    constructor(nome: string) {
        super(nome);
        this._nome = nome;
        this._taijutsu = Random.definirAtributos(500, 1_000);
        this._ninjutsu = Random.definirAtributos(100, 500);
        this._genjutsu = Random.definirAtributos(10, 100);
        this._byakugan = Random.definirAtributos(100, 1_000);
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
    Byakugan: ${this._byakugan.toFixed(1)}`
        );
    } 

    public atacar(): string {
        let diminuirRestencia = Random.definirAtributos(300, 500);
        let diminuirChakra = Random.definirAtributos(500, 800);
        this._resistenciaFisica -= diminuirRestencia;
        this._chakra -= diminuirChakra;
        return `\nByakugan - Punho Gentil com força de ${this._byakugan.toFixed(1)}
            Cansaço Físico: ${diminuirRestencia.toFixed(1)}    
            Consumo de chakra: ${diminuirChakra.toFixed(1)}\n`;
    }
}
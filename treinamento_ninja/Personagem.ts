import Utils from "./Utils";

export default class Personagem {
    protected _nome: string; 
    protected _taijutsu: number;
    protected _ninjutsu: number;
    protected _genjutsu: number;
    protected _resistenciaFisica: number;
    protected _chakra: number;
    protected _velocidade: number;
    
    constructor(nome: string) {
        this._nome = nome;
        this._taijutsu = Utils.definirAtributos(10, 100);
        this._ninjutsu = Utils.definirAtributos(10, 100);
        this._genjutsu = Utils.definirAtributos(10, 100);
        this._resistenciaFisica = 1_000;
        this._chakra = 1_000;
        this._velocidade = 0;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get velocidade(): number {
        return this._velocidade;
    }

    public status(): string {
        return (
            `
Ninja:

    Nome: ${this._nome}
    Taijutsu: ${this._taijutsu.toFixed(1)} 
    Ninjutsu: ${this._ninjutsu.toFixed(1)} 
    Genjutsu: ${this._genjutsu.toFixed(1)}
    Resistência Física: ${this._resistenciaFisica.toFixed(1)} 
    Chakra: ${this._chakra.toFixed(1)} 
    Velocidade na última corrida: ${this._velocidade.toFixed(1)} km/h`
        );
    } 

    public treinarTaijutsu(): string {
        let aumentarTaijutsu = Utils.definirAtributos(25, 35);
        let diminuirRestencia = Utils.definirAtributos(15, 25);
        this._taijutsu += aumentarTaijutsu;
        this._resistenciaFisica -= diminuirRestencia
        if (this._taijutsu > 1_000)
            this._taijutsu = 1_000;
        return `\n${this.nome} aumentou ${aumentarTaijutsu.toFixed(1)} de Taijutsu em sacrifício 
        de ${diminuirRestencia.toFixed(1)} de Resistência Física\n`;
    }

    public treinarNinjutsu(): string {
        let aumentarNinjutsu = Utils.definirAtributos(20, 25);
        let diminuirRestencia = Utils.definirAtributos(8, 12);
        let diminuirChakra = Utils.definirAtributos(18, 22);
        this._ninjutsu += aumentarNinjutsu;
        this._resistenciaFisica -= diminuirRestencia;
        this._chakra -= diminuirChakra;
        if (this._ninjutsu > 1_000)
            this._ninjutsu = 1_000;
        return `\n${this.nome} aumentou ${aumentarNinjutsu.toFixed(1)} de Ninjutsu em sacrifício 
        de ${diminuirRestencia.toFixed(1)} de Resistência Física e ${diminuirChakra.toFixed(1)} de Chakra\n`;
    }

    public treinarGenjutsu(): string {
        let aumentarGenjutsu = Utils.definirAtributos(18, 22);
        let diminuirChakra = Utils.definirAtributos(13, 17);
        this._genjutsu += aumentarGenjutsu;
        this._chakra -= diminuirChakra;
        if (this._genjutsu > 1_000)
            this._genjutsu = 1_000;
        return `\n${this.nome} aumentou ${aumentarGenjutsu.toFixed(1)} de Genjutsu em sacrifício 
        de ${diminuirChakra.toFixed(1)} de Chakra\n`;
    }

    public batalhar(): string {
        let diminuirRestencia = Utils.definirAtributos(100, 150);
        let diminuirChakra = Utils.definirAtributos(100, 150);
        this._resistenciaFisica -= diminuirRestencia;
        this._chakra -= diminuirChakra;
        return `\nNa batalha, ${this.nome} gastou ${diminuirRestencia.toFixed(1)} de Resistência Física 
        e ${diminuirChakra.toFixed(1)} de Chakra\n`;
    }

    public descansar(horas: number): string {
        let recuperarFisico = horas * Utils.definirAtributos(10, 20);
        let recuperarChakra = horas * Utils.definirAtributos(8, 12);
        this._resistenciaFisica += recuperarFisico;
        this._chakra += recuperarChakra;
        if (this._resistenciaFisica > 1_000)
            this._resistenciaFisica = 1_000;
        if (this._chakra > 1_000)
            this._chakra = 1_000;
        return `\n${this.nome} recuperou ${recuperarFisico.toFixed(1)} de Resistência Física 
        e ${recuperarChakra.toFixed(1)} de Chakra\n`;
    }

    public correr(): number {
        return this._velocidade = Utils.definirAtributos(15, 50);
    }

    public atacar(): string {
        return "Jogar shurikens";
    }

    public hospitalizado(): boolean {
        return this._chakra < 0 || this._resistenciaFisica < 0;
    }
}
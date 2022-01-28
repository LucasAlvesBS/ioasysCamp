export default class Util {
    public static definirAtributos(inicio: number, fim: number): number {
        return inicio + Math.random() * (fim - inicio);
    }
}
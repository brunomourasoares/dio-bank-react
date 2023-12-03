import { soma, multiplica } from "./Soma"

describe('soma', () => {
    it('deve somar 1 ao número informado', () => {
        const value = soma(1);
        expect(value).toBe(2);
    })

    it("deve multiplicar um número por 2", () => {
        const value = multiplica(2, 2);
        expect(value).toBe(4);
    })

    it("deve multiplicar por 3", () => {
        const value = multiplica(2, 3);
        expect(value).toBe(6);
    })

    it("erro ao tentar multiplicar por números diferentes de 2 e 3", () => {
        const value = multiplica(2, 4);
        expect(value).toBe("Multiplicador não aceito");
    })
})
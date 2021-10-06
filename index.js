class Trikampis {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    spausdintiDuomenis() {
        console.log(`Krastine a: ${this.a}`);
        console.log(`Krastine b: ${this.b}`);
        console.log(`Krastine c: ${this.c}`);
        console.log(`Perimetras: ${this.perimetras}`);
        if (this.arTrikampisEgzistuoja) {
            console.log("Trikampis egzistuoja!");
        }
        else {
            console.log("Trikampis neegzistuoja!");
        }
        console.log(`Trikampis ${this.arTrikampisEgzistuoja ? "egzistuoja" : "neegzistuoja"}.`);
        console.log(`Trikampis ${this.arTrikampisStatusis ? "yra" : "nera"} statusis.`);
        console.log(`---------------`);
    }
    get perimetras() {
        return this.a + this.b + this.c;
    }
    get arTrikampisEgzistuoja() {
        return this.a + this.b > this.c &&
            this.b + this.c > this.a &&
            this.a + this.c > this.b;
    }
    get arTrikampisStatusis() {
        const a2 = this.a * this.a;
        const b2 = this.b * this.b;
        const c2 = this.c * this.c;
        return a2 + b2 === c2 ||
            a2 + c2 === b2 ||
            b2 + c2 === a2;
    }
}
const trikampiai = [new Trikampis(3, 4, 5)];
trikampiai.push(new Trikampis(6, 3, 8));
for (const trikampis of trikampiai) {
    trikampis.spausdintiDuomenis();
}

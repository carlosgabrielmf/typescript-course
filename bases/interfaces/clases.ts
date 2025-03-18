(()=>{
    interface Xmen {
        name: string,
        realName: string,
        mutantPower(id: string): string;
    }

    interface Human{
        age:  number;
    }

    //* Las clases no pueden extender una interfaz pero si implementarla y la sintaxis es la misma que en extender.

    class Mutant implements Xmen, Human {

        constructor(
            public name: string,
            public realName: string,
            public age: number
        ){}

        mutantPower(id: string): string {
            return `El nombre real del mutante ${this.name} es ${this.realName}`;
        }

    }
})()
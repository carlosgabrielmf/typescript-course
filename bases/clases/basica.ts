(()=>{

    class Avenger {
        //* Las propiedades estaticas se pueden acceder sin instanciar la clase y solo dentro de la clase
        //* Pasa igual con los metodos estaticos y las propiedades privadas.
        static avgAge: number = 30;
        constructor(
            private name: string,
            public team: string,
            public realName?: string,) {}
            public bio () {
                return `${this.name} (${this.team})`;
            }
        }

    const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');
    console.log(antman);
    console.log(antman.bio());
    
    

})()
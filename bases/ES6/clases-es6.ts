(()=>{
    // Declaramos la clase con su constructor y sus propiedades, para luego instanciarla con una instancia NEW.
    class Avenger {
        name;
        power;

        // El tipo de dato lo declaramos en los parametros del constructor.
        constructor(name: string, power: number){
            this.name = name;
            this.power = power;
        }
    }



    const Ironman = new Avenger('Hulk', 9000);
    console.log(Ironman);

})()
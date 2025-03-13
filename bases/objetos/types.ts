(()=>{

    //* Aqui estamos creando interfaces o tipos de datos personalizados, para reducir la cantidad de codigo que escribimos y para que sea mas facil de leer.
    //? Interfaz Hero

    type Hero = {
        name: string, 
        age?: number, 
        powers: number[], 
        getName?: () => string
    }

    let flash: Hero = {
        name: "Barry Allen",
        age: 24,
        powers: [1,2]
    }


    let superman: Hero = {
        name: "Clark Kent",
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    }
    

})()
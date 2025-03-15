(()=>{
    //* Las interfaces y los tipos son muy similares, pero las interfaces son más utilizadas para definir la estructura de un objeto, se extienden como las clases y son usadas para peticiones http
    //* Los tipos son más utilizados para definir tipos de datos, como string, number, boolean, etc.
    
    interface Hero { //! notece que no tiene la palabra type ni el igual
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
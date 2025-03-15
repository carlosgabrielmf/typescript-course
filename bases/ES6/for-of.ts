(()=>{

    //* Declaramos el type de Avengers con sus propiedades
    type Avengers = {
        name: string,
        weapon: string
    }

    //* Declaramos los objetos de tipo Avengers usando las propiedades del type
    const Ironman: Avengers = {
        name: "Ironman",
        weapon: "Armor"
    }

    const Capitan: Avengers = {
        name: "Captain America",
        weapon: "Shield"
    }

    const Vision: Avengers = {
        name: "Vision",
        weapon: "Mind Stone"
    }

    //* Declaramos un array de Avengers para luego recorrerlo con un for of
    const Avengers: Avengers[] = [Ironman, Capitan, Vision];

    //! Recorremos el array de Avengers con un for of: recorre cada avenger de Avengers y lo imprime en consola
    for (const avenger of Avengers) {
        console.log(avenger);
        
    }


})()
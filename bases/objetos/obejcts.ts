(()=>{

    //*Objeto
    //*Aqui solo estoy declando el objeto principal.
    //*Este objeto tiene propiedades establecidas, peor no tiene valores por defecto.
    //* Ademas de que una de las propiedades es opcional, ya que tiene el signo de interrogacion al final.
    //* A diferencia de las funciones, los parametros opcinales pueden ir en cualquier lugar, lo verdaderamente importante es que esten alfabeticamente ordenados.
    let flash: {name: string, age?: number, powers: string[], getName?: () => string}  = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"]
    }
    

    //*Aqui abajo estoy declarando el objeto con sus propiedades ay establecidas anteriormente.
    //*Esto se llama inferencia de tipos.
    //* Sin embargo, si queremos declarar un objeto con propiedades diferentes a las que ya tiene el objeto principal, se puede hacer de otra manera

    let superman: {name: string, age?: number, powers: string[], getName?: () => string}  = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super velocidad"]
    }

    console.log(flash);
    console.log(superman);
    
    

})()
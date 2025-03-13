(()=>{

    type Hero = {
        name: string, 
        age?: number, 
        powers: number[], 
        getName?: () => string
    }

    //* Union Types es la posibilidad de tener una variable que puede tener varios tipos de datos.
    let MyCustomVariable: (string | number | Hero) = 'Nombre';
    console.log( typeof MyCustomVariable);

    MyCustomVariable = 20;
    console.log( typeof MyCustomVariable);

    MyCustomVariable = {
        name: 'Flash',
        age: 60,
        powers: [1,2,3],
    };
    console.log( typeof MyCustomVariable);
    console.log( MyCustomVariable);
    

})()
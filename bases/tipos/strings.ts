(()=>{

    const nombre: string = 'Fernando';
    const apellido: string = 'Herrera';
    const nombreCompleto: string = ` hola, ${nombre} ${apellido}. Bienvenido`;

    console.log(nombreCompleto);

    //Se puede castear a string si se necesita
    const nombreCompleto2: number = 123;
    console.log(nombreCompleto2.toString());

})()
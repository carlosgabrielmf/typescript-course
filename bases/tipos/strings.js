"use strict";
(() => {
    const nombre = 'Fernando';
    const apellido = 'Herrera';
    const nombreCompleto = ` hola, ${nombre} ${apellido}. Bienvenido`;
    console.log(nombreCompleto);
    //Se puede castear a string si se necesita
    const nombreCompleto2 = 123;
    console.log(nombreCompleto2.toString());
})();

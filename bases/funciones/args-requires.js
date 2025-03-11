"use strict";
(() => {
    // Mientras mas especifico sea el tipo de dato, mejor
    // En este caso, se especifica que el tipo de dato que se espera es un string
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    // Es necesario que mandemos ambos argumentos, de lo contrario, se generara un error
    // Es lo bueno de typescript que valida por nosotros
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();

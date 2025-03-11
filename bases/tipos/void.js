"use strict";
(() => {
    //el tipo void se usa cuando una funcion no retorna nada
    function llamarBatman() {
        console.log('Mostrar la batiseñal');
    }
    //llamamos a la funcion
    const mensaje = llamarBatman();
    console.log(mensaje);
})();

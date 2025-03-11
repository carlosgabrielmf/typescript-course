"use strict";
(() => {
    let numero = 123;
    let hex = 0xf00d;
    let binary = 0b1010;
    let octal = 0o744;
    let decimal = 6;
    let big = 100n; // esto es un entero de 64 bits, mas
    //grande que el tipo number
    console.log(numero, hex, binary, octal, decimal, big);
})();

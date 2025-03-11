(()=>{

    
    let numero: number = 123;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let decimal: number = 6;
    let big: bigint = 100n; // esto es un entero de 64 bits, mas
                            //grande que el tipo number
    console.log(numero, hex, binary, octal, decimal, big);  
})()
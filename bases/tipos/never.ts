(()=>{

    //El tipo never es un subtipo de todos los tipos y representa un valor que nunca puede ocurrir.
    //Por ejemplo, never es el tipo de retorno para una función de expresión de flecha que siempre lanza una excepción o una función que nunca retorna.
    function error(mensaje: string): never {
        throw new Error(mensaje);
    }

    // Despues de realizar la accion, el programa se detiene
    error('Error crítico... línea 5');
})()
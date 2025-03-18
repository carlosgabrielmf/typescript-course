(()=>{
    //* Definiendo esta interfaz para una funcion, se puede definir la estructura de la funcion y asi se restringe el tipo de datos que se pueden pasar a la funcion
    interface addTwoNumbers {
        (a: number, b: number): number; //* Se define la estructura de la funcion
    }

    let add: addTwoNumbers;

    //* Si aqui coloco una funcion que no cumpla con la estructura de la interfaz, me marcara un error.
    add = (a: number, b: number) => a + b;


})();
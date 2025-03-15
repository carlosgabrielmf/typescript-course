(()=>{

    //! No se eebe usar var, ya que es una mala practica.
    //* Var es una variable global, y se puede reasignar.
    //*Let es una variable local, y no se puede reasignar.
    //*Si se quiere reasignar, se debe usar let.

    //? Lo correcto es simpre usar constantes.

    
    const getName = (): string => {
        let name = "Carlos";
        return name;
    }
    
    console.log(getName());


})()
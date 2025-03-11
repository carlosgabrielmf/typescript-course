(()=>{

    // Argumentos opcionales
    // Al colocar un signo de interrogación al final del argumento, se convierte en opcional
    // Los argumentos opcionales deben ir al final de los argumentos requeridos
    const fullName = (firstName: string, lastName?: string): string => {

        return `${firstName} ${lastName}`;

    }

   
    const name = fullName('Tony', 'Stark');

    console.log({name});

})()
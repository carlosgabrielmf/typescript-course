(()=>{

   // Los argumentos por defecto se pueden definir en la misma funcion, al lado lo igualamos al valor que queremos darle.
   // Veamos el ejemplo de uppercase
    const fullName = (firstName: string, lastName?: string, upper: boolean = false, ): string => {

        if(upper){
            return `${firstName} ${lastName}`.toUpperCase();
        }

    }

   
    const name = fullName('Tony', 'Stark', true);

    console.log({name});

})()
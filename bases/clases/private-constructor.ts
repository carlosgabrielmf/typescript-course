(()=>{

    class Apocalipsis {
       private constructor( public name: string ){}

        static instance: Apocalipsis;

        static callApocalipsis(){
            if (!Apocalipsis.instance) {
                console.log('Es la primera vez que se llama');
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis');
            }
            return Apocalipsis.instance;
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis();

})()
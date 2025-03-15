(()=>{

    class Avenger {
        constructor (
         public name: string,
         public realName: string
        ){
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }

    }

    class Xmen extends Avenger {
        constructor (
            name: string,
            realName: string,
            public isMutant: boolean,
        ){
            super(name, realName)
            
        }

        //* un get siempre regresa un valor pero no recibe nada
        get fullName () {
            return `${this.name} - ${this.realName}`;
        }

        //* un set siempre recibe un valor pero no regresa nada, sin embargo puede modificar el valor de una propiedad
        set fullName (name: string) {
            if (name.length < 3) {
                throw new Error('El nombre debe de ser mayor a 3 caracteres');
            }
            this.name = name;
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Carlos';
    console.log(wolverine.fullName);


})()
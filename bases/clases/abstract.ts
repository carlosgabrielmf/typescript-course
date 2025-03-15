(()=>{

    // una clase abstracta no se puede instanciar, solo se puede heredar.
    abstract class Mutant {
        constructor (
            public name: string,
            public realName: string
        ){}  
    }

    class Xmen extends Mutant {
        mundoSalvado(){
            return 'Mundo Salvado';
        }
    }
    class Villians extends Mutant {
        conquistarMundo(){
            return 'Mundo Conquistado';
        }
    }

    const printName = (character: Mutant) => {
        console.log(character.name);
    }

    const wolverine: Xmen = new Xmen ('Wolverine', 'Logan');
    const villano: Villians = new Villians ('Magneto', 'Erick');
    console.log(wolverine.mundoSalvado()); 
    console.log(villano.conquistarMundo());
    printName(villano);
    
    
    


})()
// Crear interfaces

interface Auto {
  encender:boolean,
  velocidadMaxima:number,
  acelear:()=>void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Auto ): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto

interface Guason {
  reir?:boolean,
  comer:boolean,
  llorar?:boolean
}

// utilizando propiedades opcionales

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface CiudadGotica {
 ( ciudadanos: string[]): number,

}

const ciudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface DatosPersona {
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio(): void
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements DatosPersona {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string
  ){}

  imprimirBio(): void {
    console.log(`Nombre: ${this.nombre}, 
                Edad: ${this.edad}, 
                Sexo: ${this.sexo}, 
                Estado Civil: ${this.estadoCivil}`);
  }
}
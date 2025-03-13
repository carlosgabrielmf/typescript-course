"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["superman"] = 100] = "superman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.flash;
    const fuerzaSuperman = Fuerza.superman;
    const fuerzaBatman = Fuerza.batman;
    const fuerzaAcuaman = Fuerza.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"]
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super velocidad"]
    };
    console.log(flash);
    console.log(superman);
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let MyCustomVariable = 'Nombre';
    console.log(typeof MyCustomVariable);
    MyCustomVariable = 20;
    console.log(typeof MyCustomVariable);
    MyCustomVariable = {
        name: 'Flash',
        age: 60,
        powers: [1, 2, 3],
    };
    console.log(typeof MyCustomVariable);
    console.log(MyCustomVariable);
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["superman"] = 100] = "superman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.flash;
    const fuerzaSuperman = Fuerza.superman;
    const fuerzaBatman = Fuerza.batman;
    const fuerzaAcuaman = Fuerza.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (personas, ...restArgs) => {
    return `${personas}, ${restArgs.join(', ')}`;
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    let variable = 'Hola Mundo';
    console.log(variable);
    variable = 15;
    console.log(variable);
})();
(() => {
    const medicos = ['Dr. A', 'Dr. B', 'Dr. C'];
    const medicos2 = ['Dr. A', 'Dr. B', 'Dr. C'];
    console.log(medicos);
    console.log(medicos2);
    console.log(medicos[0]);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isSuperman, isBatman });
})();
(() => {
    let Role;
    (function (Role) {
        Role[Role["Employee"] = 0] = "Employee";
        Role[Role["Manager"] = 1] = "Manager";
        Role[Role["Admin"] = 2] = "Admin";
    })(Role || (Role = {}));
    const role = Role.Employee;
})();
(() => {
    function error(mensaje) {
        throw new Error(mensaje);
    }
    error('Error crítico... línea 5');
})();
(() => {
    let numero = 123;
    let hex = 0xf00d;
    let binary = 0b1010;
    let octal = 0o744;
    let decimal = 6;
    console.log(numero, hex, binary, octal, decimal);
})();
(() => {
    const nombre = 'Fernando';
    const apellido = 'Herrera';
    const nombreCompleto = ` hola, ${nombre} ${apellido}. Bienvenido`;
    console.log(nombreCompleto);
    const nombreCompleto2 = 123;
    console.log(nombreCompleto2.toString());
})();
(() => {
    const persona = ['Jorge', 31, true];
    console.log(persona);
    console.log(persona[0]);
    console.log(persona[1]);
})();
(() => {
    function llamarBatman() {
        console.log('Mostrar la batiseñal');
    }
    const mensaje = llamarBatman();
    console.log(mensaje);
})();
//# sourceMappingURL=main.js.map
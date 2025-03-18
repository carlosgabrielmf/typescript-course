//* Las clases principales siempre se declaran primero
interface Client {
    name: string,
    age?: number,
    address: Address //! Esta propiedad es de tipo de la interfaz que se anida luego
    getFullAdress(id:string): string //* Se puede colocar metodos dentro de las interfaces
}

//* Las anidaciones como esta, se declaran luego, sin ningun problema.
interface Address {
    id: number,
    zip: string,
    city: string
}

const client: Client = {
    name: "John Doe",
    age: 30,
    address: {
        id: 1,
        zip: "12345",
        city: "New York"
    },
    getFullAdress () {
        return this.address.city;
    },
}

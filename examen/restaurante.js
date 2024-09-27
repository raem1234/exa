// Clase que representa un plato del menú del restaurante
class Plato {
    constructor(nombre, precio) {
        this.nombre = nombre; 
        this.precio = precio; 
    }
}

class Pedido {
    constructor() {
        this.platos = []; // Almacena los platos que se pidan
        this.total = 0; // Acumula el total de los precios de los platos
    }

    agregarPlato(plato) {
        this.platos.push(plato); // Añade el objeto plato al array this.platos
        this.total += plato.precio; // Suma el precio del plato al total
    }

    obtenerPlatos() {
        // Aquí usamos un bucle for  para concatenar los nombres
        let nombresPlatos = ''; // Cadena para almacenar los nombres

        for (let i = 0; i < this.platos.length; i++) {
            nombresPlatos += this.platos[i].nombre; // Agrega el nombre del plato
            if (i < this.platos.length - 1) {
                nombresPlatos += ', '; // Añade coma y espacio entre nombres, menos al final
            }
        }

        return nombresPlatos; // Devuelve la lista de nombres de los platos
    }
}

class Restaurante {
    constructor() {
        this.pedidos = {}; // Objeto para almacenar los pedidos por mesa
    }

    crearPedido(mesa) {
        this.pedidos[mesa] = new Pedido(); // Crea un nuevo pedido para la mesa
    }

    agregarPlato(mesa, plato) {
        this.pedidos[mesa].agregarPlato(plato); // Agrega el plato al pedido de la mesa
    }
}

// Ejemplo de uso
const restaurante = new Restaurante(); 
const plato1 = new Plato("Salchipapa", 8000); 
const plato2 = new Plato("Hamburguesa", 10000); 

restaurante.crearPedido(1);  // Crea un pedido para la mesa 1
restaurante.agregarPlato(1, plato1); 
restaurante.agregarPlato(1, plato2); 

// Mostrar en consola los platos pedidos y el total a pagar
console.log(` mesa 1: ${restaurante.pedidos[1].obtenerPlatos()}`); // Nombres de los platos
console.log(`Total : $${restaurante.pedidos[1].total}`); // Total acumulado


// fain, map, rebius fain tampoco
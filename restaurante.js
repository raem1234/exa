// Clase que representa un plato del menú del restaurante
class Plato {
    constructor(nombre, precio) {
        //  el objeto Plato con un nombre y un precio
        this.nombre = nombre; 
        this.precio = precio; 
    }
}

class Pedido {
    constructor() {
        //  Dentro de la clase Pedido creo un array llamado platos y una variable total inicializada en 0
        this.platos = []; // almacenara los platos que se pidan 
        this.total = 0; // esto ayudara a sumar el resultado de los platos que pidas
    }

    agregarPlato(plato) {
        //Esto añade el objeto plato al array this.platos
        this.platos.push(plato); 
        this.total += plato.precio; //este pedaso de codigo accede al precio del objeto plato y lo suma a this.total
    }

    obtenerPlatos() {
        // el map crea un nuevo array  con los resultados de la función dada a cada elemento del array original
//el join lo que hace es crear una cadena de texto lo cual ara que poar cada plato este separado por un , y espacio
        return this.platos.map(plato => plato.nombre).join(', '); 
    }
}

class Restaurante {
    constructor() {
        // almacenar los pedidos
        this.pedidos = {};//aqui es escencial  el uso de objetos para poder identificar cada pedido por su id en cual se colocara mas adelante en el console.log

    }

    crearPedido(mesa) {
        // crea pedido y lo enlasa  con la mesa
        this.pedidos[mesa] = new Pedido(); // asocia la mesa con un  Pedido
    }

    agregarPlato(mesa, plato) {
        // Llama al método agregarPlato 
        this.pedidos[mesa].agregarPlato(plato); // agrega el plato al pedido de la mesa
    }
}


const restaurante = new Restaurante(); // Crea una nueva instancia de Restaurante
const plato1 = new Plato("Salchipapa", 8000); // Crea un nuevo plato y  lo almacena en la variable plato1
const plato2 = new Plato("Hamburguesa", 10000); 

// Crea un nuevo pedido para la mesa 1
restaurante.crearPedido(1);  //el 1 seria como la mesa es como un id 

restaurante.agregarPlato(1, plato1); 
restaurante.agregarPlato(1, plato2); 

//aqui mostrara en la consola los platos pedidos y el total de la mesa 1
console.log(`Platos mesa 1: ${restaurante.pedidos[1].obtenerPlatos()}`); // nombres de los platos
console.log(`Total a pagar mesa 1: $${restaurante.pedidos[1].total}`); //  el total acumulado


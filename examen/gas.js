class Gas {
    constructor(presion, volumen, temperatura, constanteGas) {
        this._presion = presion;      
        this._volumen = volumen;       
        this._temperatura = temperatura; 
        this._constanteGas = constanteGas; 
    }

    // Getters para acceder a las propiedades
    //retorna
    get presion() {
        return this._presion;
    }

    get volumen() {
        return this._volumen; 
    }

    get temperatura() {
        return this._temperatura; 
    }

    get constanteGas() {
        return this._constanteGas; 
    }

    // Setters para modificar las propiedades
    //actualizaaa
    set presion(nuevaPresion) {
        this._presion = nuevaPresion; 
    }

    set volumen(nuevoVolumen) {
        this._volumen = nuevoVolumen; 
    }

    set temperatura(nuevaTemperatura) {
        this._temperatura = nuevaTemperatura; 
    }

    set constanteGas(nuevaConstante) {
        this._constanteGas = nuevaConstante; 
    }

    
    calcularMasa() {

        // Utiliza la fórmula: m = (P * V) / (R * T)
        return (this._presion * this._volumen) / (this._constanteGas * this._temperatura);
    }

    // Método para mostrar los valores de las propiedades y la masa calculada
    mostrarValores() {
        console.log(`Presión: ${this._presion} `);                     
        console.log(`Volumen: ${this._volumen} `);                     
        console.log(`Temperatura: ${this._temperatura} `);              
        console.log(`Constante del gas: ${this._constanteGas} `); 
        console.log(`Masa del gas: ${this.calcularMasa().toFixed(3)} `); 
    }
}


const gas1 = new Gas(101325, 0.0224, 273.15, 287); 
gas1.mostrarValores(); // Llama al método para mostrar los valores


 


// Clase Producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Clase Carrito
class Carrito {
    constructor() {
        this.productos = [];
    }

    // Método para agregar productos al carrito
    agregarProducto(producto, cantidad) {
        for (let i = 0; i < cantidad; i++) {
            this.productos.push(producto);
        }
        alert(`Se agregaron ${cantidad} ${producto.nombre}(s) al carrito.`);
    }

    // Método para calcular el total de la compra
    calcularTotal() {
        let total = 0;
        for (let producto of this.productos) {
            total += producto.precio;
        }
        return total;
    }

    // Método para finalizar la compra
    finalizarCompra() {
        let total = this.calcularTotal();
        alert(`El total de la compra es: $${total}.`);
    }

    // Mostrar detalles del carrito
    mostrarDetalles() {
        if (this.productos.length === 0) {
            alert("El carrito está vacío.");
        } else {
            let detalles = "Productos en el carrito:\n";
            let resumen = {};
            for (let producto of this.productos) {
                if (resumen[producto.nombre]) {
                    resumen[producto.nombre]++;
                } else {
                    resumen[producto.nombre] = 1;
                }
            }
            for (let [nombre, cantidad] of Object.entries(resumen)) {
                detalles += `${cantidad} x ${nombre}\n`;
            }
            alert(detalles);
        }
    }
}

// Crear productos disponibles
const productosDisponibles = [
    new Producto('Leche', 1000),
    new Producto('Pan de Molde', 2000),
    new Producto('Queso', 1200),
    new Producto('Mermelada', 890),
    new Producto('Azúcar', 1300)
];

// Función principal para gestionar la compra
function gestionarCompra() {
    let carrito = new Carrito();
    let seguirComprando = true;

    while (seguirComprando) {
        let mensaje = "Productos disponibles:\n";
        for (let i = 0; i < productosDisponibles.length; i++) {
            mensaje += `${i + 1}. ${productosDisponibles[i].nombre} $${productosDisponibles[i].precio}\n`;
        }

        let productoElegido = parseInt(prompt(mensaje + "Ingresa el número del producto que deseas agregar al carrito:")) - 1;

        // Validar la entrada del producto
        if (productoElegido >= 0 && productoElegido < productosDisponibles.length) {
            let cantidad = parseInt(prompt("Ingresa la cantidad de unidades:"));

            // Agregar el producto al carrito
            carrito.agregarProducto(productosDisponibles[productoElegido], cantidad);

            // Preguntar si desea seguir comprando
            let respuesta = prompt("¿Deseas seguir agregando productos? (s/n)").toLowerCase();
            if (respuesta !== 's') {
                seguirComprando = false;
            }
        } else {
            alert("Número de producto incorrecto, por favor intenta nuevamente.");
        }
    }

    // Mostrar detalles y finalizar la compra
    carrito.mostrarDetalles();
    carrito.finalizarCompra();
}

// Iniciar la gestión de compra
gestionarCompra();

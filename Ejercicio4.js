class Carrito{
    constructor(){
        this.productos = []
        this.total = 0
    }
    agregarProducto(nombre,precio){
        this.productos.push(nombre,precio);
        this.total += precio
    }
    calcularDescuento(){
        if(this.total > 100){
            console.log(`tiene  el 10% de descuento, el total es: ${this.total - ((this.total *10)/100) }`);
        }else if(this.total < 100 && this.total > 50){
            console.log(`tiene  el 5% de descuento, el total es: ${this.total - ((this.total *5)/100) }`);
        }else{
            console.log("No tiene descuento");
        }
    }
}

carrito = new Carrito();
carrito.agregarProducto("vino",12);
carrito.agregarProducto("fruta",6);
carrito.agregarProducto("cepillo dental", 4);
carrito.agregarProducto("silla",58);
carrito.agregarProducto("mesa",110);
carrito.calcularDescuento();
console.log("=====================");
carritoB = new Carrito();
carritoB.agregarProducto("vino",12);
carritoB.agregarProducto("fruta",6);
carritoB.agregarProducto("cepillo dental", 4);
carritoB.agregarProducto("silla",58);
carritoB.calcularDescuento();
console.log("=====================");
carritoC = new Carrito();
carritoC.agregarProducto("vino",12);
carritoC.agregarProducto("fruta",6);
carritoC.agregarProducto("cepillo dental", 4);
carritoC.calcularDescuento();

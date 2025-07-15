class ListaDeCompras{
    constructor(){
        this.listaDeCompras = []
    }

    agregarProducto(producto){
        this.listaDeCompras.push(producto);
        console.log(`El producto ${producto} ha sido agregado`);
    }

    mostrarProducto(){
        console.log("========================================================");
        

        console.log("Su lista de compras contiene los siguientes productos!!!");
        
        for(let i=0; i<this.listaDeCompras.length;i++){
            console.log(`  -${this.listaDeCompras[i]}`);
        }
    }
}

let listaA = new ListaDeCompras();
listaA.agregarProducto("mango");
listaA.agregarProducto("pera");
listaA.agregarProducto("manzana");
listaA.agregarProducto("durazno");
listaA.mostrarProducto();
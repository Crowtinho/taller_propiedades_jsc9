function libro(titulo, autor){
    this.titulo = titulo;
    this.autor  =autor;
    this.prestado = false;

    this.prestar =  function(){
        if(this.prestado == false){
            this.prestado = true
            console.log(`El libro ${this.titulo} está disponible`);
        }else{
            console.log(`El libro ${this.titulo} no está disponible`);
        }
    }
    this.devolver = function(){
        if(this.prestado == true){
            this.prestado = false
            console.log(`Ha regresado el libro ${this.titulo}`);
        }else{
            console.log("No puede devolver un libro que no ha sido pedido prestado !!!");
        }
    }
}
let libroA = new libro("El principito","Antoine de Saint-Exupéry")
libroA.prestar()
libroA.prestar()
libroA.devolver()
libroA.devolver()
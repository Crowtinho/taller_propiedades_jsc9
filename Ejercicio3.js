class ReproductorDeMusica{
    constructor(){
        this.reproduciendo = "reproduciendo";
        this.pausada = "pausada";
        this.estado = this.pausada;
        // console.log("reproductor iniciado");
    }

    play(){
        if(this.estado == this.pausada){
            this.estado = this.reproduciendo;
            console.log(`${this.estado.charAt(0).toUpperCase() + this.estado.slice(1).toLowerCase()} música`);
        }else if(this.estado == this.reproduciendo){
            console.log(`Ya se está ${this.estado} la música`);
        }
    }

    pausar(){
        if(this.estado == this.reproduciendo){
            this.estado = this.pausada
            console.log(`Música ${this.estado}`);   
        }else{
            console.log(`La música está ${this.estado}`);
        }
    }
}

let  reproductor = new ReproductorDeMusica();
reproductor.play();
reproductor.play();
reproductor.pausar();
reproductor.pausar();

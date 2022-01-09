class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;        
    }
    // Método de instancia
    aumentarVolume() {
        this.volume +=2;
    }
    dominuirVolume() {
        this.volume -=2;
    }
    static trocaPilha(){
        console.log('Ok, vou trocar')
    }
}


const controle1 = new ControleRemoto('lg')
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.trocaPilha
console.log(controle1);

ControleRemoto.trocaPilha();
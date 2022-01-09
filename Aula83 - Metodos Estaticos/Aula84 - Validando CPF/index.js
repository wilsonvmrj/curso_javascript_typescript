// 705.484.450-52  070.987.720-03


class ValidaCPF {
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo',{
            writeable: false,
            enmerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g,'')
        });

    }
    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    valida(){
        if (!this.cpfLimpo) return false; 
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;

        return 'cheguei aqui';

    }
}



let validacpf = new ValidaCPF('070.987.720-03')


console.log(validacpf.valida());
class Heroi{
    constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

    atacar(){
        let ataque = "";

        
        if (this.tipo == "Mago") {  //ESTRUTURA DE DECISÃO E OPERADOR LÓGICO
            ataque = "magia";
        } 
        else if (this.tipo == "Guerreiro") {
            ataque = "espada";
        } 
        else if (this.tipo == "Monge") {
            ataque = "artes marciais";
        } 
        else if(this.tipo == "Ninja") {
            ataque = "shuriken";
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }

}
let heroi = new Heroi('Alanes', 26 , 'Monge'); // OBJETO
heroi.atacar(); //CHAMANDO A FUNÇÃO ATACAR DO OBJETO HERÓI

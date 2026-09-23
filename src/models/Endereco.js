class Endereco {
    #id;
    #cep;
    #logradouro;
    #numero;
    #bairro;
    #cidade;
    #uf;
    #idCliente;

    constructor(cep, logradouro, numero, bairro, cidade, uf, idCliente, id = null){
        this.#cep = cep;
        this.#logradouro = logradouro;
        this.#numero = numero;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#uf = uf;
        this.#id = id;
        this.#idCliente = idCliente;
    }
    //id
    get id(){
        return this.#id;
    }
    //cep
    get cep(){
        return this.#cep;
    }

    set cep(value){
        this.#cep = value;
    }

    //logradouro
    get logradouro(){
        return this.#logradouro
    }

    set logradouro(value){
        this.#logradouro = value;
    }

     //numero
    get numero(){
        return this.#numero
    }

    set numero(value){
        this.#numero = value;
    }

     //bairro
    get bairro(){
        return this.#bairro
    }

    set bairro(value){
        this.#bairro = value;
    }

     //cidade
    get cidade(){
        return this.#cidade
    }

    set cidade(value){
        this.#cidade = value;
    }

    //uf
    
    get uf(){
        return this.#uf
    }

    set uf(value){
        this.#uf = value;
    }

    //id_cliente
    
    get idCliente(){
        return this.#idCliente
    }

    set idCliente(value){
        this.#idCliente = value;
    }
}

export default Endereco;
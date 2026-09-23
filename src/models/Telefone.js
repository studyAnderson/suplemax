class Telefone {
    #id;
    #numero;
    #ddd;
    #id_cliente

    constructor(id,numero,ddd,id_cliente){
        this.#id = id
        this.#numero = numero
        this.#ddd = ddd
        this.#id_cliente = id_cliente
    }
    get id(){
        return this.#id
    }
    get numero(){
        return this.#numero
    }
    set numero(value){
        this.#numero = value
    }
    get ddd(){
        return this.#ddd
    }
    set ddd(value){
        this.#ddd = value
    }
    get id_cliente(){
        return this.#id_cliente
    }
    set id_cliente(value){
        this.#id_cliente = value
    }
}

export default Telefone;

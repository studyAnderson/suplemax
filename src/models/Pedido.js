class Pedido {
    #id;
    #dataCompra;
    #valorTotal;
    #idCliente;
    #idUser;
    #itens;
    
    constructor(dataCompra, valorTotal, idCliente, idUser, itens, id = null){
        this.#dataCompra = dataCompra;
        this.#valorTotal = valorTotal;
        this.#idCliente = idCliente;
        this.#idUser = idUser;
        this.#itens = itens;
        this.#id = id;
        
    }
    //id
    get id(){
        return this.#id;
    }
    //dataCompra
    get dataCompra(){
        return this.#dataCompra;
    }

    set dataCompra(value){
        this.#dataCompra = value;
    }

    //valorTotal
    get valorTotal(){
        return this.#valorTotal;
    }

    set valorTotal(value){
        this.#valorTotal = value;
    }

    //idCliente
    get idCliente(){
        return this.#idCliente;
    }

    set idCliente(value){
        this.#idCliente = value;
    }

    //idUser
    get idUser(){
        return this.#idUser;
    }

    set idUser(value){
        this.#idUser = value;
    }
// itens
    get itens(){
        return this.#itens
    }

    set itens(value){
        this.#itens = value;
    }

}

export default Pedido;
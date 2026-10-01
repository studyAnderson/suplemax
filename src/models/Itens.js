class Itens {
    #id;
    #valorProduto;
    #quantidade;
    #idPedido;
    #idProduto;
    

    constructor(valorProduto, quantidade, idPedido, idProduto, id = null){
        this.#valorProduto = valorProduto;
        this.#quantidade = quantidade;
        this.#idPedido = idPedido;
        this.#idProduto = idProduto;
        this.#id = id;
        
    }
    //id
    get id(){
        return this.#id;
    }
    //valor do produto
    get valorProduto(){
        return this.#valorProduto;
    }

    set valorProduto(value){
        this.#valorProduto = value;
    }

    //quantidade
    get quantidade(){
        return this.#quantidade
    }

    set quantidade(value){
        this.#quantidade = value;
    }

     //id do pedido
    get idPedido(){
        return this.#idPedido
    }

    set idPedido(value){
        this.#idPedido = value;
    }

     //id do produto
    get idProduto(){
        return this.#idProduto
    }

    set idProduto(value){
        this.#idProduto = value;
    }
    
}

export default Itens;

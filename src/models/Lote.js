class Lote {
    #id;
    #numeroLote;
    #quantidade;
    #dataValidade;
    #produtoId;

    constructor(numeroLote, quantidade, dataValidade, produtoId, id = null){
        this.#numeroLote = numeroLote;
        this.#quantidade = quantidade;
        this.#dataValidade = dataValidade;
        this.#id = id;
        this.#produtoId = produtoId;
    }
    //id
    get id(){
        return this.#id;
    }
    //numero lote
    get numeroLote(){
        return this.#numeroLote;
    }

    set numeroLote(value){
        this.#numeroLote= value;
    }

    //quantidade
    get quantidade(){
        return this.#quantidade
    }

    set quantidade(value){
        this.#quantidade = value;
    }

     //data validade
    get dataValidade(){
        return this.#dataValidade
    }

    set dataValidade(value){
        this.#dataValidade = value;
    }
     
    //id_produto
    
    get produtoId(){
        return this.#produtoId
    }

    set produtoId(value){
        this.#produtoId = value;
    }
}

export default Lote;
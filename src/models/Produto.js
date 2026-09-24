class Produto {
    #id;
    #descricao;
    #preco;
    #estoqueAtual;
    #estoqueMinimo;
    #estoqueMaximo;
    

    constructor(descricao, preco, estoqueAtual, estoqueMinimo, estoqueMaximo, id = null){
        this.#descricao = descricao;
        this.#preco = preco;
        this.#estoqueAtual = estoqueAtual;
        this.#estoqueMinimo = estoqueMinimo;
        this.#estoqueMaximo = estoqueMaximo;
        this.#id = id;
        
    }
    //id
    get id(){
        return this.#id;
    }
    //descrição
    get descricao(){
        return this.#descricao;
    }

    set descricao(value){
        this.#descricao = value;
    }

    //preço
    get preco(){
        return this.#preco
    }

    set preco(value){
        this.#preco = value;
    }

     //estoque atual
    get estoqueAtual(){
        return this.#estoqueAtual
    }

    set estoqueAtual(value){
        this.#estoqueAtual = value;
    }

     //estoque minimo
    get estoqueMinimo(){
        return this.#estoqueMinimo
    }

    set estoqueMinimo(value){
        this.#estoqueMinimo = value;
    }

     //estoque maximo
    get estoqueMaximo(){
        return this.#estoqueMaximo
    }

    set estoqueMaximo(value){
        this.#estoqueMaximo = value;
    }
    
}

export default Produto;
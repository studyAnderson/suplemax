class Cliente {
    #id;
    #cpf;
    #nome;
    #email;
    #telefone;
    #endereco;

    constructor(cpf, nome, email, telefone, endereco, id = null){
        this.#nome = nome;
        this.#email = email;
        this.#cpf = cpf;
        this.#id = id;
        this.#telefone = telefone;
        this.#endereco = endereco;
    }
    //id
    get id(){
        return this.#id;
    }
    //nome
    get nome(){
        return this.#nome;
    }

    set nome(value){
        this.#nome = value;
    }

    //email
    get email(){
        return this.#email
    }

    set email(value){
        this.#email = value;
    }

    //cpf
    
    get cpf(){
        return this.#cpf
    }

    set cpf(value){
        this.#cpf = value;
    }

    //telefone
    
    get telefone(){
        return this.#telefone
    }

    set telefone(value){
        this.#telefone = value;
    }

    //endereco
    
    get endereco(){
        return this.#endereco
    }

    set endereco(value){
        this.#endereco = value;
    }
};
export default Cliente;
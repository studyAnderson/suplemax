class Cliente {
    #id;
    #cpf;
    #nome;
    #email;
    #telefone;

    constructor(cpf, nome, email, telefone, id = null){
        this.#nome = nome;
        this.#email = email;
        this.#cpf = cpf;
        this.#id = id;
        this.#telefone = telefone;
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
};
export default Cliente;
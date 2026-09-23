DROP DATABASE IF EXISTS suplemax;
CREATE DATABASE IF NOT EXISTS suplemax;
DROP DATABASE IF EXISTS suplemax;
CREATE DATABASE IF NOT EXISTS suplemax;

USE suplemax;
CREATE TABLE user (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(75) NOT NULL,
    email varchar(75) NOT NULL,
    password varchar(75)
);
CREATE TABLE cliente (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cpf CHAR(11) UNIQUE NOT NULL,
    nome VARCHAR(75) NOT NULL,
    email VARCHAR(75) NOT NULL UNIQUE
);
CREATE TABLE telefone (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    numero VARCHAR(15) NOT NULL,
    ddd CHAR(3) NOT NULL,
    id_cliente INT,
    
    FOREIGN KEY(id_cliente)
    REFERENCES cliente(id)
);
CREATE TABLE endereco (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cep CHAR(8) NOT NULL,
    logradouro VARCHAR(75) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    uf CHAR(2) NOT NULL,
    id_cliente INT,
    FOREIGN KEY(id_cliente)
    REFERENCES cliente(id)
);
CREATE TABLE pedido(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    data_compra DATETIME NOT NULL,
    valor_total DECIMAL(40,5) NOT NULL,
    id_cliente INT,
    id_user INT,
    
    FOREIGN KEY(id_user)
    REFERENCES cliente(id),
    FOREIGN KEY(id_cliente)
    REFERENCES cliente(id)
);
CREATE TABLE produto(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	descricao VARCHAR(400) NOT NULL,
    preco DECIMAL(25,5) NOT NULL,
    estoque_atual TINYINT NOT NULL,
    estoque_minimo TINYINT NOT NULL,
    estoque_maximo TINYINT NOT NULL
);
CREATE TABLE itens(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    valor_produto DECIMAL(25,5) NOT NULL,
    quantidade TINYINT NOT NULL,
    id_pedido INT,
    id_produto INT,
    
    FOREIGN KEY(id_pedido)
    REFERENCES pedido(id),
    FOREIGN KEY(id_produto)
    REFERENCES produto(id)
);
CREATE TABLE lote(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    numero_lote VARCHAR(25) NOT NULL UNIQUE,
    quantidade TINYINT NOT NULL,
    data_validade DATE,
    id_produto INT,
    
    FOREIGN KEY(id_produto)
    REFERENCES produto(id)
);
export interface ILivro {
    isbn: string;
    titulo: string;
    sinopse?: string;
    num_paginas: number;
    autor: IAutor[];
    editora: IEditora;
    categoria: ICategoria[];
}

export interface ICategoria {
    nome: string;
}

export interface IEditora {
    nome: string;
    site?: string;
}

export interface IAutor {
    nome: string;
    email?: string;    
}
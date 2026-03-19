export interface Autor{
    nome: string ;
    email: string;
}

export interface Editora{
    nome: string;
    site: string;
}

export interface Categoria{
    nome: string;
}

export interface Livro{
    isbn: string;
    titulo: string;
    sinopse: string;
    paginas: string;
    data_lancamento: string;
    autor: Autor[],
    categoria: Categoria[],
    editora: Editora
}   

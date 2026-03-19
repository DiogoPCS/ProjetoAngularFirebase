export interface Autor{
    nome: string;
    email: string;
}

export interface Categoria{
    nome: string;
}

export interface Editora{
    nome: string;
    email: string;
}

export interface Livro{
    isbn: string;
    titulo: string;
    sinopse: string;
    data_lancamento : string;
    paginas: string;
    autor: Autor[];
    categoria: Categoria[];
    editora: Editora;

}
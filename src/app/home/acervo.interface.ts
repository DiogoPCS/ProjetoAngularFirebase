export interface ILivro{
    isbn: string;
    titulo:string;
    categoria: ICategoria[]

}
export interface ICategoria{
    nome: string;
}
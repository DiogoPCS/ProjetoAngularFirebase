import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isLoading: boolean = false;
  handlerMessage = '';
  roleMessage = '';

  constructor(
    private http: HttpClient
  ) {}

  // produção
  URL = 'http://127.0.0.1:8000/api';

  // desenvolvimento
  //URL = 'http://127.0.0.1:5001/lionsclube-5885a.cloudfunctions.net/app';
    
  data: any;

  //A ideia aqui é que as funções abaixo sejam o início para operações básicas
  //pode-se implementar outros services ou incluir novas funções junto a este se necessário
  //TODO: Lembrar de fazer verificações de segurança no endpoint
  //TODO: Lembrar de aplicar canActivated nas rotas

  /**
   * Cria um novo documento dentro de uma collection
   * @param endpoint - endereço da API para execução. Ex: /create-collection/nome-collection
   * @param data - dados dos formulário/json a serem inseridos no documento
   * @returns Observable<any> - retorna uma observable para subscrição com response ok 200 ou erro
   */
	post(endpoint: string, data: any): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const serialized = JSON.stringify(data);

    return this.http.post(`${this.URL}/${endpoint}`, serialized, {'headers':headers});
  }

  /**
   * Atualiza os dados de um documento da collection especificada
   * @param endpoint - endereço da API para execução. Ex: /nome-collection/update/document-id
   * @param data - dados dos formulário/json a serem atualizados no documento
   * @returns Observable<any> - retorna uma observable para subscrição com response ok 200 ou erro
   */
  put(endpoint: string, data: any): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const serialized = JSON.stringify(data);

    return this.http.put(`${this.URL}/${endpoint}`, serialized, {'headers':headers});
  }

  /**
   * Deleta um documento da collection especificada
   * @param endpoint - endereço da API para execução. Ex: /nome-collection/delete/document-id
   * @returns Observable<any> - retorna uma observable para subscrição com response ok 200 ou erro
   */
  delete(endpoint: string): Observable<any> {
    return this.http.delete(`${this.URL}/${endpoint}`);
  }

  /**
   * Exibe um documento se contiver id, ou exibe todos os documentos se o id estiver omisso
   * @param endpoint - carrega um único documento. Ex: /nome-collection/read/document-id ou
   * @param endpoint - carrega todos os documentos da collection. Ex: /nome-collection/read
   * @returns Observable<any> - retorna uma observable para subscrição com response ok 200 ou erro
   */
  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.URL}/${endpoint}`);
  }

    

}
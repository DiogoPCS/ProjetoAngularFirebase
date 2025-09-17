import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isLoading: boolean = false;
  handlerMessage = '';
  roleMessage = '';

  constructor(private http: HttpClient) {}

  URL = 'http://127.0.0.1:8000/api';
    
  /**
   * Método POST genérico
   */
  post(endpoint: string, data: any): Observable<any> {
    // Se data for FormData, NÃO adicione headers de Content-Type
    if (data instanceof FormData) {
      return this.http.post(`${this.URL}/${endpoint}`, data);
    }
    
    // Para dados JSON, adicione os headers normalmente
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(`${this.URL}/${endpoint}`, data, { headers });
  }

  getFotoUrl(caminho: string | null): string {
  if (!caminho) return 'assets/default-avatar.png';
  if (caminho.startsWith('http')) return caminho;
  return `http://127.0.0.1:8000/storage/${caminho}`;
}


  put(endpoint: string, data: any): Observable<any> {
    // Mesma lógica para PUT
    if (data instanceof FormData) {
      return this.http.put(`${this.URL}/${endpoint}`, data);
    }
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.put(`${this.URL}/${endpoint}`, data, { headers });
  }

  delete(endpoint: string): Observable<any> {
    return this.http.delete(`${this.URL}/${endpoint}`);
  }

  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.URL}/${endpoint}`);
  }
}
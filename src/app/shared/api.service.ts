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

  // URL da API (mantenha /api no final)
  URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  /**
   * POST genérico.
   * Se `data` for FormData, não adiciona headers (browser define boundary automaticamente).
   */
  post(endpoint: string, data: any): Observable<any> {
    if (data instanceof FormData) {
      // NÃO setar Content-Type no FormData para evitar erro no boundary
      return this.http.post(`${this.URL}/${endpoint}`, data);
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(`${this.URL}/${endpoint}`, data, { headers });
  }

  put(endpoint: string, data: any): Observable<any> {
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

  /**
   * Normaliza caminhos/URLs de imagens vindos do backend.
   * Suporta:
   * - URL absoluta (ex: "http://...")
   * - caminhos começando com "/storage" ou "storage"
   * - caminhos contendo "postagens" ou "pictures"
   * - apenas filename (ex: "arquivo.jpg"), que será prefixado para /storage/pictures/arquivo.jpg
   */
  getFotoUrl(caminho: string | null): string {
    if (!caminho) return 'assets/default-avatar.png';

    let s = String(caminho).trim();

    // Se já for URL absoluta (http:// ou https://), retorna direto
    if (/^https?:\/\//i.test(s)) return s;

    // Base da API, sem /api no final
    const base = this.URL.replace(/\/api\/?$/, '');

    // Corrige 'Storage' maiúsculo para '/storage'
    s = s.replace(/^\/?Storage/i, '/storage');

    // Garante barra inicial se começar com 'storage'
    if (s.startsWith('storage/')) {
      s = '/' + s;
    }

    // Remove múltiplas barras consecutivas
    s = s.replace(/\/{2,}/g, '/');

    // Se começar com /storage, monta URL completa
    if (s.startsWith('/storage')) {
      // Evita duplicação: /storage/storage/
      s = s.replace(/\/storage\/storage\//, '/storage/');
      return `${base}${s}`;
    }

    // Se contém 'postagens' ou 'pictures', assume relativo à storage
    if (s.toLowerCase().includes('postagens') || s.toLowerCase().includes('pictures')) {
      const candidate = `${base}/storage/${s}`.replace(/\/storage\/storage\//, '/storage/');
      return candidate;
    }

    // Se for só um filename, assume que está em /storage/pictures/
    return `${base}/storage/pictures/${s}`;
  }
}

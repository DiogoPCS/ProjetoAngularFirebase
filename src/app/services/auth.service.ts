import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storage: Storage) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Não interceptar requisições de login/registro
    if (req.url.includes('login') || req.url.includes('registrar')) {
      return next.handle(req);
    }

    return from(this.storage.get('auth_token')).pipe(
      switchMap(token => {
        if (token) {
          const authReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
          return next.handle(authReq);
        }
        return next.handle(req);
      })
    );
  }
}
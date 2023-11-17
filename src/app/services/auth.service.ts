import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})

export class AuthenticateService {
    duration: number = 2000;
    message: string = 'Erro inesperado';
    isLoading = false;

    constructor( 
        public auth: Auth,
        private _message: MessageService,
        private _router: Router,
    ) { }
    
    /*
    * @description: Registra um novo usuário
    * @param email: string
    * @param password: string
    * @return: Promise<any>
    * */
    public async register(email: string, password: string): Promise<boolean> {
        this.isLoading = true;

        createUserWithEmailAndPassword(this.auth, email, password)
        .then(() => {
            this._message.show('Conta criada com sucesso! Realize o Login!!!');
        })
        .catch((_: any) => {
            this.showErro(_, email, password);
        })
        .finally(() => {
            this.isLoading = false;
        });

        return true;
    };

    /*
    * @description: Efetua login usando o firebase
    * @param email: string
    * @param password: string
    * @return: Promise<any>
    * */
    public async login(email: string, password: string): Promise<boolean>{
        this.isLoading = true;

        signInWithEmailAndPassword(this.auth, email, password)
        .then((response: any) => {
            console.log(response.user);
            this._message.show('Login Realizado com Sucesso!');
        })
        .catch((_: any) => {
            this.showErro(_, email, password);
        })
        .finally(() => {
            this.isLoading = false;
        });

        return true;
    }

    
    /*
    * @description: Chame essa função para redirecionar um usuário para outra página
    * @param page: string
    * */
    redirectTo(page: string){
        this._router.navigate([page]);
    }

    /*
    * @description: Exibe a mensagem de erro
    * @param error: any response from firebase
    * @param email: string
    */
    showErro(_: any, email: string, password: string){
        if (_.code == 'auth/too-many-requests') this.message = 'Você realizou muitas tentativas de login. Tente novamente mais tarde.';
        if (_.code == 'auth/user-not-found') this.message = 'Usuário não encontrado.';
        if (_.code == 'auth/wrong-password') this.message = 'Senha incorreta.';
        if (_.code == 'auth/weak-password') this.message = 'A senha deve conter no mínimo 6 caracteres.';
        if (_.code == 'auth/email-already-in-use') this.message = 'Este e-mail já está em uso.';
        if (_.code == 'auth/missing-email') this.message = 'E-mail não informado.';
        if (!!!email) this.message = 'Preencha o e-mail.';
        if (!!!password) this.message = 'Preencha a senha com 6 caracteres.';
        this._message.show(this.message, this.duration);
    }

}
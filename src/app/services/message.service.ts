import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})

export class MessageService {

    constructor( 
        private _toastController: ToastController
    ) { }

    public show(message: any, duration = 3000 || undefined) {
        this._toastController.create({
            message: message,
            duration: duration
        }).then(toast => toast.present());
    }
}
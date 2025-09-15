import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  
  constructor(private storage: Storage) {
    this.initializeApp();
  }

  async initializeApp() {
    try {
      await this.storage.create(); // ← Esta linha é CRUCIAL
      console.log('Storage inicializado com sucesso!');
    } catch (error) {
      console.error('Erro ao inicializar storage:', error);
    }
  }
}
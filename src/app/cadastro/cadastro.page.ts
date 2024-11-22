import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { AlertController } from '@ionic/angular';
import { triggerAsyncId } from 'async_hooks';
import { MessageService } from '../services/message.service';
import { ref, uploadBytesResumable, getDownloadURL, Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {




carro2:any=[];


carro: any={
  nome:null,
  cor:null,
  ano:null,
  topspeed: null,
  tipo: null,
  foto:null, 
}

file: any = {};



  constructor(
    public crudservice: CrudService,
    public _message: MessageService,
    private storage: Storage
  ) { 
     this.getCarro2();

  }



  ngOnInit() {
  }
 salvar(){
  if(this.carro.id)
    this.crudservice.update(this.carro.id, this.carro, 'carros')

  if(!this.carro.id)
   this.crudservice.insert(this.carro,'carros')
   this.getCarro2();
 }

 getCarro2(){
  this.crudservice.fetchAll('carros')
  .then(resp =>{
    console.log(resp);
    this.carro2 = resp;
  })
 }

 remover(id:any){
  alert(id);
  this.crudservice.remove(id, 'carros')
  .then(() => {
    this.getCarro2();
  })
 }
 editar( carro: any){
  this.carro = carro;

 }

 memorizararquivo(event: any){
this.file =  event.target.files[0];
this.fazerUpload();
 }

 fazerUpload() {
  if (!this.file.name) {
    this._message.show('Favor selecionar o arquivo a ser enviado', 5000);
    return;
  }

  // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(this.storage, this.file.name);
    const uploadTask = uploadBytesResumable(storageRef, this.file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        console.log('Upload is ' + progress + '% done');

        switch (snapshot.state) {
          case 'paused':
            console.log('Envio pausado');
            break;
          case 'running':
            console.log('Carregando arquivo');
            this._message.show('Carregando arquivo, favor aguardar!', 2000);
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            console.log('Não enviado! Usuário sem permissão');
            this._message.show('Não enviado! Usuário sem permissão!');
            break;
          case 'storage/canceled':
            // User canceled the upload
            console.log('Não enviado: upload cancelado');
            this._message.show('Erro: Upload cancelado!');
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            console.log('Não enviado. Ocorreu um erro desconhecido!');
            this._message.show('Oops! Ocorreu um erro desconhecido!');
            break;
        }

        console.log('Arquivo enviado');
        this._message.show('Arquivo enviado com sucesso!');
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('Url do arquivo é ' + downloadURL)
        });
      }
    );
}
}

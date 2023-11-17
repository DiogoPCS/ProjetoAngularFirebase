import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alunos = [];

  nome = 'Joaozinho';

  aluno = {
    nome: null,
    idade: null,
    ra: null,
    id: null
  }

  public file: any = {};

  isLoading: boolean = false;
  nome_usuario: any;

  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService
  ) { }

  // código PHP
  /*
    <?php
    declare(strict_types=1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type");

    sleep(2);
    echo json_encode([
        'dados' => 'Resposta da API'
    ]);
?>
  */

  pegarDados() {
    this.isLoading = true;
    fetch('http://localhost/api_fatec/index.php')
    .then(response => response.json())
    .then(resposta => {
      localStorage.setItem('nome_usuario', JSON.stringify(resposta.usuario_info))
      console.log('Resposta do localstorage')
      console.log(localStorage.getItem('nome_usuario'))
    })
    .catch(erro => {
      console.log(erro)
    })
    .finally(() => {
      console.log('Processo Finalizado!');
      this.isLoading = false;
    })
  }


  criarConta(dados: any){
    console.log(dados.email);
  }

  realizarLogin(dados: any) {
    this._authenticate.login(dados.email, dados.password);
  }

  inserirAluno(dados: any){
    this.aluno.nome = dados.nome;
    // this.aluno.idade = 10;
    // this.aluno.ra = 321321;

    this._crudService.insert(this.aluno, 'alunos');
  }

  listarAlunos(){
    this._crudService.fetchAll('alunos')
    .then( alunos => {
      this.alunos = alunos;
    })
  }


  removerAluno(aluno: any){
    console.log(aluno);
    this._crudService.remove(aluno.id, 'alunos')
  }

  consultarAluno(dados: any){
    console.log(dados);
    this._crudService.fetchByOperatorParam('nome', '==', dados.nome, 'alunos')
    .then( aluno => {
      console.log(aluno[0].id);
    })
  }

  atualizarDadosAluno(dados: any){
    if (this.aluno.id == null) {
      this._crudService.fetchByOperatorParam('nome', '==', dados.nome, 'alunos')
      .then( aluno => {
        this.aluno = aluno[0];
        console.log(this.aluno);
      })
    } else {
      this._crudService.update(this.aluno.id, dados, 'alunos');
    }
  }

  memorizarArquivo(event: any) {
    this.file = event.target.files[0];
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.page.html',
  styleUrls: ['./endpoint.page.scss'],
})
export class EndpointPage  {

  constructor() { 
    this.getFuncionarios();
  }

  isLoading: boolean = false;
  funcionarios: any;

  remover(id: any){

      this.isLoading = true;
      fetch('http://localhost/api_atividade/funcionario/remover_funcionario.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ CodFun: id})
        }
      )
      .then(response => response.json())
      .then(response => {
        this.getFuncionarios()
        console.log(response);
      })
      .catch(erro => {
        console.log(erro);
      })
      .finally(()=>{
        this.isLoading = false;
      })
    
  }

  getFuncionarios(){
    this.isLoading = true;
    fetch('http://localhost/api_atividade/funcionario/listar_funcionario.php')
    .then(response => response.json())
    .then(response => {
      this.funcionarios = response.funcionarios

      console.log(this.funcionarios);
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }

}

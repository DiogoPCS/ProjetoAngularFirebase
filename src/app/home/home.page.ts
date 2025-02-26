import { ThisReceiver } from "@angular/compiler";
import { CrudService } from "../services/crud.service";

@Component ({
  selector: 'app-home', 
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})

export class HomePage{
  pokemon:any = {
    nome: null,
    poder: null
  };

  constructor(
    public crudService:CrudService
    $pokemon = new Pokemon()

   ) { } 
  

  enviar (){
    this.crudService.insert(this.pokemon, 'pokemons')
  }
}
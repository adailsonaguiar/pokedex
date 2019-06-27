import { Component } from '@angular/core'
import { AppService } from '../app.services';
import { Pokemon } from '../pokelist/pokelist.model'

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent {

  pokemons: Pokemon[]

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.pokemonList()
      .subscribe(data => this.pokemons = data.results)
  }

}

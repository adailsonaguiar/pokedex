import { Component } from '@angular/core'
import { AppService } from '../app.services';
import { Pokemon } from '../pokelist/pokelist.model'

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent {

  pokemons: Pokemon[] = []

  constructor(private service: AppService) { }

  async ngOnInit() {
    await this.service.pokemonList()
      .subscribe(data => this.pokemons = data.results)
    console.log(this.pokemons.length)

  }

  getUrlImage(i: string) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
  }
}

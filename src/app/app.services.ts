import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Pokemon } from './pokelist/pokelist.model';

@Injectable()
export class AppService {

    public url = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(private http: HttpClient) { }

    pokemonList(): Observable<any> {
        return this.http.get(this.url)
    }

    pokemonDetail(nome: string): Observable<any> {
        console.log(this.url + nome)
        return this.http.get(this.url + nome)
    }
}
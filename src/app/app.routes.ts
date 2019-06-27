import { Routes } from '@angular/router'
import { PokeinfoComponent } from './pokeinfo/pokeinfo.component';
import { PokelistComponent } from './pokelist/pokelist.component';

export const ROUTES: Routes = [
    { path: '', component: PokelistComponent },
    { path: 'porkelist', component: PokelistComponent },
    { path: 'pokeinfo/:id', component: PokeinfoComponent },
]
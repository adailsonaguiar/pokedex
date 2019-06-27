import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppService } from './app.services'
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { PokeinfoComponent } from './pokeinfo/pokeinfo.component';
import { PokelistComponent } from './pokelist/pokelist.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeinfoComponent,
    PokelistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

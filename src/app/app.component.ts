import { Component } from '@angular/core'
import { AppService } from './app.services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';

  constructor(private service: AppService) { }

  ngOnInit() {
  }
}

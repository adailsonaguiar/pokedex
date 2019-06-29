import { Component, OnInit } from '@angular/core'
import { AppService } from '../app.services'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokeinfo',
  templateUrl: './pokeinfo.component.html',
  styleUrls: ['./pokeinfo.component.css']
})
export class PokeinfoComponent implements OnInit {

  info: any
  name: string

  constructor(private service: AppService,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name = params['id']
    })

    this.service.pokemonDetail(this.name)
      .subscribe(infos => this.info = infos)
  }

}

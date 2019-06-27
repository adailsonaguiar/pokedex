import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.services';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pokeinfo',
  templateUrl: './pokeinfo.component.html',
  styleUrls: ['./pokeinfo.component.css']
})
export class PokeinfoComponent implements OnInit {

  info: any

  constructor(private service: AppService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['url'])
    this.service.pokemonDetail(this.route.snapshot.params['url'])
      .subscribe(infos => this.info = infos)
  }

}

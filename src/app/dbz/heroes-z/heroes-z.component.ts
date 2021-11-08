import { Component, Input, OnInit } from '@angular/core';
import { HeroeZ } from 'src/app/models/heroe-z.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-heroes-z',
  templateUrl: './heroes-z.component.html',
  styleUrls: ['./heroes-z.component.scss']
})
export class HeroesZComponent implements OnInit {

  // decorador para recibir datos en este caso los heroes Z
  // @Input('listHeroes') heroesZ: HeroeZ[] = []

  get heroesZ() {
    return this.DBZService.heroesZ;
  }

  constructor(
    private DBZService: DbzService
  ) { }

  ngOnInit(): void {
  }

}

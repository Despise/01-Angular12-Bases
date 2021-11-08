import { Component, OnInit } from '@angular/core';
import { HeroeZ } from 'src/app/models/heroe-z.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  nuevoHeroe: HeroeZ = {
    nombre: 'Vegeta',
    poder: 1
  };

  constructor() { }

  ngOnInit(): void {
  }

  // agregarNuevoHeroeZ( event: HeroeZ) {
  //   this.heroesZ.push( event );
  //   console.log( 'PADRE', event );
  // }

}

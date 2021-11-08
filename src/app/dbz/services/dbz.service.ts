import { Injectable } from '@angular/core';
import { HeroeZ } from 'src/app/models/heroe-z.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _heroesZ: HeroeZ[] = [
    {
      nombre: 'Krillin',
      poder: 10000
    },
    {
      nombre: 'Yancha',
      poder: 9800
    }
  ];

  get heroesZ(): HeroeZ[] {
    return [...this._heroesZ];
  }

  constructor() {
    console.log('SVC INIT');
  }

  agregarHeroeZ( heroe: HeroeZ ) {
    this._heroesZ.push( heroe );
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroeZ } from 'src/app/models/heroe-z.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-heroe-z',
  templateUrl: './agregar-heroe-z.component.html',
  styleUrls: ['./agregar-heroe-z.component.scss']
})
export class AgregarHeroeZComponent implements OnInit {


//El heroes ingresado
@Input('nuevoHeroe') nuevoHeroe: HeroeZ = {
  nombre: '',
  poder: 0
};

// envia info al componente padre
// @Output() onNuevoHeroeZ: EventEmitter<HeroeZ> = new EventEmitter();

  constructor( private DBZService: DbzService ) { }

  ngOnInit(): void {
  }

  agregar() {
    if( this.nuevoHeroe.nombre.trim().length === 0 )
      return;

    this.DBZService.agregarHeroeZ( this.nuevoHeroe );

    console.log( 'HIJO', this.nuevoHeroe );
    // this.onNuevoHeroeZ.emit( this.nuevoHeroe );
    this.nuevoHeroe = { nombre: '', poder: 0 };
    
  }

}

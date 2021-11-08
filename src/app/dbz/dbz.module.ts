import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { HeroesZComponent } from './heroes-z/heroes-z.component';
import { AgregarHeroeZComponent } from './agregar-heroe-z/agregar-heroe-z.component';



@NgModule({
  declarations: [
    MainPageComponent,
    HeroesZComponent,
    AgregarHeroeZComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }

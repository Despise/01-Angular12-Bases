import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './dbz/main-page/main-page.component';

const routes: Routes = [
  // {
  //   path: 'heroes-z',
  //   component: MainPageComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

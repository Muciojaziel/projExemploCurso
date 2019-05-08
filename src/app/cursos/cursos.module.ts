import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CursosComponent } from './cursos/cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule
  ],
  exports: [ CursosComponent ]
})
export class CursosModule { }

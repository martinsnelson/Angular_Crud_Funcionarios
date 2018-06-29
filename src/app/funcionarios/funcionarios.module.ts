import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';

import { FuncionariosService } from './funcionarios.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    FuncionariosComponent,
    FuncionarioComponent,
    FuncionariosListaComponent
  ],
  exports: [
    FuncionariosComponent
  ],
  providers: [
    FuncionariosService
  ]
})
export class FuncionariosModule { }

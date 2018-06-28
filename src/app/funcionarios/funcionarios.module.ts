import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FuncionariosComponent,
    FuncionarioComponent,
    FuncionariosListaComponent
  ],
  exports: [
    FuncionariosComponent
  ]
})
export class FuncionariosModule { }

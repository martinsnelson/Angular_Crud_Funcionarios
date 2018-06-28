import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuncionariosModule } from './funcionarios/funcionarios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FuncionariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

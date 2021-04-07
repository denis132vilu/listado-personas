import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './components/persona/persona.component';
import { FormAddPersonaComponent } from './components/form-add-persona/form-add-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormAddPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './components/persona/persona.component';
import { FormAddPersonaComponent } from './components/form-add-persona/form-add-persona.component';
import { LoggingService } from './services/logging.service';
import { PersonasService } from './services/personas.service';

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
  providers: [
    LoggingService,
    PersonasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

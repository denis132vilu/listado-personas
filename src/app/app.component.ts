import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from './models/persona.model';
import { LoggingService } from './services/logging.service';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas: Persona[] = [];

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService,
  ) {
  }

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }
}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from './models/persona.model';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Juan', 'Pérez'),
    new Persona('Laura', 'Juárez'),
    new Persona('Karla', 'Lara'),
  ];

  constructor(private loggingService: LoggingService) {
  }

  ngAfterViewInit(): void {
  }

  personaAgregada(persona: Persona): void {
    this.loggingService.enviarMensajeAConsola('Agregamos al arreglo la nueva persona:' + persona.nombre)
    this.personas.push(persona);
  }

}

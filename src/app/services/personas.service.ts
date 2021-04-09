import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Pérez'),
    new Persona('Laura', 'Juárez'),
    new Persona('Karla', 'Lara'),
  ];

  saludar = new EventEmitter<number>();

  constructor(
    private loggingService: LoggingService,
  ) { }

  agregarPersona(persona: Persona): void {
    this.loggingService.enviarMensajeAConsola('Agregamos Persona:' + persona.nombre + ' ' + persona.apellido)
    this.personas.push(persona);
  }
}

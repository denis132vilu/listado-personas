import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/models/persona.model';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-form-add-persona',
  templateUrl: './form-add-persona.component.html',
  styleUrls: ['./form-add-persona.component.css'],
})
export class FormAddPersonaComponent implements OnInit {
  @ViewChild('frmAddPerson') frmAddPerson: NgForm | undefined;
  @Output() personaCreada = new EventEmitter<Persona>();

  persona: Persona;

  constructor(private loggingService: LoggingService) {
    this.persona = this.getNewPersona();
  }

  ngOnInit(): void {
  }

  getNewPersona(nombre?: string, apellido?: string): Persona {
    return new Persona(nombre || '', apellido || '');
  }

  agregarPersona(): void {
    if (this.frmAddPerson?.invalid) return;
    let persona = this.getNewPersona(this.persona.nombre, this.persona.apellido);
    this.loggingService.enviarMensajeAConsola('Enviamos persona con nombre:' + persona.nombre + " apellido:" + persona.apellido);
    this.personaCreada.emit(persona);
    this.persona = this.getNewPersona();
    this.frmAddPerson?.form.reset();
  }
}

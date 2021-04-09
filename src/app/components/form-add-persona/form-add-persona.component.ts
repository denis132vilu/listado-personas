import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/models/persona.model';
import { LoggingService } from 'src/app/services/logging.service';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-form-add-persona',
  templateUrl: './form-add-persona.component.html',
  styleUrls: ['./form-add-persona.component.css'],
})
export class FormAddPersonaComponent implements OnInit {
  @ViewChild('frmAddPerson') frmAddPerson: NgForm | undefined;

  persona: Persona;

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService,
  ) {
    this.persona = this.getNewPersona();
    this.personasService.saludar.subscribe((indice: number) => {
      alert('El indice es: ' + indice);
    });
  }

  ngOnInit(): void {
  }

  getNewPersona(nombre?: string, apellido?: string): Persona {
    return new Persona(nombre || '', apellido || '');
  }

  agregarPersona(): void {
    if (this.frmAddPerson?.invalid) return;
    let persona = this.getNewPersona(this.persona.nombre, this.persona.apellido);
    this.personasService.agregarPersona(persona);
    this.persona = this.getNewPersona();
    this.frmAddPerson?.form.reset();
  }
}

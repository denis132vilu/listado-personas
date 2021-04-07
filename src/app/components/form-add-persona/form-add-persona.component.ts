import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-form-add-persona',
  templateUrl: './form-add-persona.component.html',
  styleUrls: ['./form-add-persona.component.css']
})
export class FormAddPersonaComponent implements OnInit {
  @ViewChild('frmAddPerson') frmAddPerson: NgForm | undefined;
  @Output() personaCreada = new EventEmitter<Persona>();

  persona: Persona;

  constructor() {
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
    this.personaCreada.emit(persona);
    this.persona = this.getNewPersona();
    this.frmAddPerson?.form.reset();
  }
}

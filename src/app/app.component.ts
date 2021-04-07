import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from './models/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('frmAddPerson') frmAddPerson: NgForm | undefined;

  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Juan', 'Pérez'),
    new Persona('Laura', 'Juárez'),
    new Persona('Karla', 'Lara'),
  ];
  persona: Persona;

  constructor() {
    this.persona = this.getNewPersona();
  }

  ngAfterViewInit(): void {
    console.log(this.frmAddPerson);
  }

  getNewPersona(nombre?: string, apellido?: string): Persona {
    return new Persona(nombre || '', apellido || '');
  }

  agregarPersona(): void {
    if (this.frmAddPerson?.invalid) return;
    var persona = this.getNewPersona(this.persona.nombre, this.persona.apellido);
    this.personas.push(persona);
    this.persona = this.getNewPersona();
    this.frmAddPerson?.form.reset();
  }
}

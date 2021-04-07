import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from './models/persona.model';

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

  constructor() {
  }

  ngAfterViewInit(): void {
  }

  personaAgregada(persona: Persona): void {
    this.personas.push(persona);
  }

}

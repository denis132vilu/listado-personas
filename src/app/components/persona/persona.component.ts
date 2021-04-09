import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
  }

  emitirSaludo(): void {
    this.personasService.saludar.emit(this.indice)
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  enviarMensajeAConsola(mensaje: string): void {
    console.log(mensaje);
  }
}

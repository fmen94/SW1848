import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor() { }

  sesion = false
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.sesion = !this.sesion;
    this.change.emit(this.sesion);
  }

}

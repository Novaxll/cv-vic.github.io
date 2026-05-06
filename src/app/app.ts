import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
}) // <-- OJO: En tu código original faltaba cerrar este corchete
export class App {
  protected readonly title = signal('cv-musk-style');
  
  // Variable global para controlar el modo edición
  isEditing = false;

  toggleEditMode() {
    this.isEditing = !this.isEditing;
  }
}
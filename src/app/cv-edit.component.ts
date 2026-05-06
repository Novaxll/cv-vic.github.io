import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-edit',
  standalone: false,
  template: `
  <div class="cv-container editing-active">
    <div class="admin-banner">🛠️ MODO EDICIÓN ACTIVO</div>
    <app-header [isEditing]="true"></app-header>
    <div class="cv-grid">
      <div class="cv-left-column">
        <app-work-experience [isEditing]="true"></app-work-experience>
        <app-education [isEditing]="true"></app-education>
        <app-languages [isEditing]="true"></app-languages>
      </div>
      <div class="cv-right-column">
        <app-skills [isEditing]="true"></app-skills>
        <app-certificates [isEditing]="true"></app-certificates>
        <app-interests [isEditing]="true"></app-interests>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .admin-banner { background: #ef4444; color: white; text-align: center; padding: 12px; border-radius: 8px; margin-bottom: 20px; font-weight: bold; font-size: 1.1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
  `]
})
export class CvEditComponent {}
import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-view',
  standalone: false,
  template: `
  <div class="cv-container">
    <app-header [isEditing]="false"></app-header>
    <div class="cv-grid">
      <div class="cv-left-column">
        <app-work-experience [isEditing]="false"></app-work-experience>
        <app-education [isEditing]="false"></app-education>
        <app-languages [isEditing]="false"></app-languages>
      </div>
      <div class="cv-right-column">
        <app-skills [isEditing]="false"></app-skills>
        <app-certificates [isEditing]="false"></app-certificates>
        <app-interests [isEditing]="false"></app-interests>
      </div>
    </div>
  </div>
  `
})
export class CvViewComponent {}
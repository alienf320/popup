import { Component, HostListener } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-reject-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reject-popup.component.html',
  styleUrl: './reject-popup.component.scss'
})
export class RejectPopupComponent {
  selectedReason: string = '';
  reasons = [
    { value: '', label: 'Select a reason' },
    { value: 'incomplete', label: 'Fake document' },
    { value: 'invalid', label: 'Incorrect Document' },
    { value: 'non-clear', label: 'Document not clear' },
    { value: 'old', label: 'Old document' },
    { value: 'other', label: 'Other' }
  ];
  constructor(public popupService: PopupService) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
      this.popupService.close();
    }
  }

  closePopup() {
    this.popupService.close();
  }

  confirm() {
    // Here we should add logic to process the form
    this.popupService.close()
  }
}

import { Component, HostListener } from '@angular/core';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  standalone: true
})
export class PopupComponent {
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

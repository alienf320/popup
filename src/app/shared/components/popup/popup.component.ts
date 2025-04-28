import { Component, HostListener, signal } from '@angular/core';
import { PopupConfig, PopupService } from '../../services/popup.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class PopupComponent {
  optionSelected = signal('')
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
    // Here we should add  submission logic here
    this.popupService.close();
  }

  getFieldValue(config: PopupConfig, fieldId: string): string {
    const field = config.fields.find((f) => f.id === fieldId);
    return field ? field.value : '';
  }
}

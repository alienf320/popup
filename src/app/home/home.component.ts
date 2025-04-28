import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../shared/components/popup/popup.component';
import { PopupService } from '../shared/services/popup.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, PopupComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  popupService = inject(PopupService);

  openPopup() {
    this.popupService.open()
  }
}

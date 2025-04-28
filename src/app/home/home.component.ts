import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../shared/components/popup/popup.component';
import { PopupService } from '../shared/services/popup.service';
import { RejectPopupComponent } from "../shared/components/reject-popup/reject-popup.component";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, PopupComponent, RejectPopupComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  popupService = inject(PopupService);

  openRequest() {
    this.popupService.open('request')
  }

  openReject() {
    this.popupService.open('reject')
  }
}

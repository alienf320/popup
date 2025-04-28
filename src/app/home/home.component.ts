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

  openRequestPopup() {
    this.popupService.open({
      type: 'request',
      title: 'Request Document',
      subtitle: 'Affiliate ID: 453566',
      fields: [
        {
          type: 'select',
          label: 'Type',
          id: 'document-name',
          placeholder: 'Choose or enter new document type',
          options: [
            { value: '', label: 'Choose or enter other reason' },
            { value: '1', label: 'Reason 1' },
            { value: '2', label: 'Reason 2' }
          ],
          value: ''
        },
        {
          type: 'textarea',
          label: 'Description',
          id: 'document-details',
          placeholder: 'Ex: Please upload a clean and clear document',
          value: ''
        }
      ],
      confirmButton: { label: 'Confirm', action: 'submit' }
    });
  }

  openRejectPopup() {
    this.popupService.open({
      type: 'reject',
      title: 'Reject Document',
      fields: [
        {
          type: 'select',
          label: 'Please choose the reason of rejection',
          id: 'reject-reason',
          options: [
            { value: '', label: 'Choose or enter other reason' },
            { value: 'incomplete', label: 'Fake document' },
            { value: 'invalid', label: 'Incorrect document' },
            { value: 'not-clear', label: 'Document not clear' },
            { value: 'old', label: 'Old document' },
            { value: 'other', label: 'Other' }
          ],
          value: ''
        },
        {
          type: 'input',
          id: 'other-reason',
          placeholder: 'Enter the reason',
          value: '',
          showIf: { fieldId: 'reject-reason', value: 'other' }
        }
      ],
      confirmButton: { label: 'Confirm', action: 'submit' }
    });
  }
}

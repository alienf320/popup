import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupState = signal<{ type: string | null, isOpen: boolean }>({ type: null, isOpen: false })
  popupState$ = computed(() => this.popupState())

  open(type: 'request' | 'reject') {
    this.popupState.set({ type: type, isOpen: true });
  }

  close() {
    this.popupState.set({ type: null, isOpen: false });
  }
}

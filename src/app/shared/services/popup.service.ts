import { computed, Injectable, signal } from '@angular/core';

export interface PopupField {
  type: 'input' | 'textarea' | 'select';
  label?: string;
  id: string;
  placeholder?: string;
  value: string;
  options?: { value: string; label: string }[];
  showIf?: { fieldId: string; value: string };
}
export interface PopupConfig {
  type: string;
  title: string;
  subtitle?: string;
  fields: PopupField[];
  confirmButton: { label: string; action: string };
}
@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupState = signal<{ config: PopupConfig | null, isOpen: boolean }>({ config: null, isOpen: false })
  popupState$ = computed(() => this.popupState())

  open(type: PopupConfig) {
    this.popupState.set({ config: type, isOpen: true });
  }

  close() {
    this.popupState.set({ config: null, isOpen: false });
  }
}

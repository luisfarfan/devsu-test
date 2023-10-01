import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent {
  @Input() title = '';
  @Input() message = '';
  @Input() open = false;

  @Output() confirm: EventEmitter<void> = new EventEmitter<void>();

  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
}

import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'gdsc-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent {
  @Input() label: string;
  @Input() disabled = false;
  @Output() action = new EventEmitter<any>();
}


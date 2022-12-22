import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'lib-shared-modal',
  templateUrl: './shared-modal.component.html',
  styleUrls: ['./shared-modal.component.scss'],
})
export class SharedModalComponent {
  @Input() config: {
    type: string;
    title: string;
    message: string;
    cancel?: { action: string; text: string };
    ok?: { action: string; text: string };
  } = {
    type: undefined,
    title: undefined,
    message: undefined,
    cancel: undefined,
    ok: undefined,
  };
  @Output() Emitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  doAction(action: string) {
    this.Emitter.next(action);
  }
}

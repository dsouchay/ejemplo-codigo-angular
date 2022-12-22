import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModalComponent } from './shared-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SharedModalComponent],
  imports: [CommonModule, TranslateModule, MatDialogModule, MatButtonModule, MatIconModule],
  exports: [SharedModalComponent],
})
export class SharedModalModule {}

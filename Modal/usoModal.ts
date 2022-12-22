import { MatDialog } from '@angular/material/dialog';
import { SharedModalComponent } from '../../../shared/components/shared-modal/shared-modal.component';

constructor(
...
    public dialog: MatDialog
  )
  
  
   doAction(event: any) {
    const { action = undefined, doc = {}, value = {} } = event || {};
    switch (action) {
      case 'edit': {
        const { file = undefined, doc = undefined } = value || {};
        this.editDocument(doc, file);
        break;
      }
      case 'remove': {
        const dialogRef = this.dialog.open(SharedModalComponent);
        const dialogInstance = dialogRef.componentInstance;
        dialogInstance.config = {
          type: 'confirm',
          title: 'Title modal info',
          message: 'Message modal confirm remove',
          cancel: { text: 'Button modal no', action: 'close' },
          ok: { text: 'Button modal yes', action: 'removeDocument' },
        };
        dialogInstance.Emitter.subscribe((action) => {
          switch (action) {
            case 'removeDocument': {
              this.deleteDocument(doc);
              break;
            }
          }
          this.dialog.closeAll();
        });
        break;
      }
    }
  }

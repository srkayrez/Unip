import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from'@angular/material/dialog';
import { QualidadeDeSoftwareComponent } from './qualidade-de-software/qualidade-de-software.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  panelOpenState = false;

  constructor(public dialog: MatDialog,
    ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(QualidadeDeSoftwareComponent, {
      width: '500px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


}




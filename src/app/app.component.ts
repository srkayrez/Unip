import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from'@angular/material/dialog';

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

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(QualidadeDeSoftwareComponent, {
      width: '250px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}


export class QualidadeDeSoftwareComponent {
  constructor(
    public dialogRef: MatDialogRef<QualidadeDeSoftwareComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

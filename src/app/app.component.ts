import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from'@angular/material/dialog';
import { DesSistemasDistribuidosComponent } from './des-sistemas-distribuidos/des-sistemas-distribuidos.component';
import { HorasComplementaresComponent } from './horas-complementares/horas-complementares.component';
import { OrientacaoEstagioComponent } from './orientacao-estagio/orientacao-estagio.component';
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

  openQS(): void {
    const dialogRef = this.dialog.open(QualidadeDeSoftwareComponent, {
      width: '500px',

    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openOC(): void {
    const dialogRef = this.dialog.open(HorasComplementaresComponent, {
      width: '500px',

    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openDSD(): void {
    const dialogRef = this.dialog.open(DesSistemasDistribuidosComponent, {
      width: '500px',

    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openOE(): void {
    const dialogRef = this.dialog.open(OrientacaoEstagioComponent, {
      width: '500px',

    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}




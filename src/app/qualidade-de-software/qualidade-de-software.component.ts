import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-qualidade-de-software',
  templateUrl: './qualidade-de-software.component.html',
  styleUrls: ['./qualidade-de-software.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class QualidadeDeSoftwareComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<QualidadeDeSoftwareComponent>
  ) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}

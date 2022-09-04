import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-avacompiladores',
  templateUrl: './avacompiladores.component.html',
  styleUrls: ['./avacompiladores.component.scss']
})
export class AVACompiladoresComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AVACompiladoresComponent>
  ) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}

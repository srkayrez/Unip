import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-horas-complementares',
  templateUrl: './horas-complementares.component.html',
  styleUrls: ['./horas-complementares.component.scss']
})
export class HorasComplementaresComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HorasComplementaresComponent>
  ) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}

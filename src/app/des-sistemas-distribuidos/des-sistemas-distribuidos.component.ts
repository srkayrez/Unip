import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-des-sistemas-distribuidos',
  templateUrl: './des-sistemas-distribuidos.component.html',
  styleUrls: ['./des-sistemas-distribuidos.component.scss']
})
export class DesSistemasDistribuidosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DesSistemasDistribuidosComponent>
  ) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}

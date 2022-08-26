import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-orientacao-estagio',
  templateUrl: './orientacao-estagio.component.html',
  styleUrls: ['./orientacao-estagio.component.scss']
})
export class OrientacaoEstagioComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OrientacaoEstagioComponent>
  ) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}

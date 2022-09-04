import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-avaempreendedorismo',
  templateUrl: './avaempreendedorismo.component.html',
  styleUrls: ['./avaempreendedorismo.component.scss']
})
export class AVAEmpreendedorismoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AVAEmpreendedorismoComponent>
  ) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ed',
  templateUrl: './ed.component.html',
  styleUrls: ['./ed.component.scss']
})
export class EDComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EDComponent>
  ) { }

  ngOnInit(): void {
  }
  closeModal(): void {
    this.dialogRef.close();
  }

}

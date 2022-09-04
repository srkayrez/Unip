import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-avatopicos',
  templateUrl: './avatopicos.component.html',
  styleUrls: ['./avatopicos.component.scss']
})
export class AVATopicosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AVATopicosComponent>) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}

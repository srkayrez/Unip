import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface emails {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Unip';
  panelOpenState = false;
}

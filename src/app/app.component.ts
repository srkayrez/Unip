import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface HorarioAula {
  Segunda: string;
  Terca: string;
  Quarta: string;
  QuintaPar: string;
  QuintaImp: string;
  Sexta: string;
}

const ELEMENT_DATA: HorarioAula[] = [
  { Segunda: 'Qualidade de Software',
    Terca: 'Des. de Sistemas Distribuidos',
    Quarta: 'Qualidade de Software',
    QuintaPar: 'Trabalho de Curso II',
    QuintaImp: 'Orientação - Estágio',
    Sexta: '-' 
  },
  { Segunda: 'Qualidade de Software',
    Terca: 'Des. de Sistemas Distribuidos',
    Quarta: 'Qualidade de Software',
    QuintaPar: 'Trabalho de Curso II',
    QuintaImp: 'Orientação - Estágio',
    Sexta: '-' 
  },
]
  
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['Segunda', 'Terça', 'Quarta', 'QuintaPar', 'QuintaImp', 'Sexta'];
  dataSource = ELEMENT_DATA;
  title = 'Unip';
  panelOpenState = false;
}

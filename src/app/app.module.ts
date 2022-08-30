import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { QualidadeDeSoftwareComponent } from './qualidade-de-software/qualidade-de-software.component';
import { HorasComplementaresComponent } from './horas-complementares/horas-complementares.component';
import { DesSistemasDistribuidosComponent } from './des-sistemas-distribuidos/des-sistemas-distribuidos.component';
import { OrientacaoEstagioComponent } from './orientacao-estagio/orientacao-estagio.component';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [
    AppComponent,
    QualidadeDeSoftwareComponent,
    HorasComplementaresComponent,
    DesSistemasDistribuidosComponent,
    OrientacaoEstagioComponent,

   ],
  imports: [
    ScrollingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

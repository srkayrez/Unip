import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientacaoEstagioComponent } from './orientacao-estagio.component';

describe('OrientacaoEstagioComponent', () => {
  let component: OrientacaoEstagioComponent;
  let fixture: ComponentFixture<OrientacaoEstagioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrientacaoEstagioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrientacaoEstagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasComplementaresComponent } from './horas-complementares.component';

describe('HorasComplementaresComponent', () => {
  let component: HorasComplementaresComponent;
  let fixture: ComponentFixture<HorasComplementaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorasComplementaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorasComplementaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

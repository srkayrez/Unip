import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualidadeDeSoftwareComponent } from './qualidade-de-software.component';

describe('QualidadeDeSoftwareComponent', () => {
  let component: QualidadeDeSoftwareComponent;
  let fixture: ComponentFixture<QualidadeDeSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualidadeDeSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualidadeDeSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

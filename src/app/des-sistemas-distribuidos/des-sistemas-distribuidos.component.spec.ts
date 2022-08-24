import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesSistemasDistribuidosComponent } from './des-sistemas-distribuidos.component';

describe('DesSistemasDistribuidosComponent', () => {
  let component: DesSistemasDistribuidosComponent;
  let fixture: ComponentFixture<DesSistemasDistribuidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesSistemasDistribuidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesSistemasDistribuidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

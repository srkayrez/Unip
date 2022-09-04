import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDComponent } from './ed.component';

describe('EDComponent', () => {
  let component: EDComponent;
  let fixture: ComponentFixture<EDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

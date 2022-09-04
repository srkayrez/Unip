import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVACompiladoresComponent } from './avacompiladores.component';

describe('AVACompiladoresComponent', () => {
  let component: AVACompiladoresComponent;
  let fixture: ComponentFixture<AVACompiladoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVACompiladoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AVACompiladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

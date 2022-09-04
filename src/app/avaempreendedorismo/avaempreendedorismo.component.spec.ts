import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVAEmpreendedorismoComponent } from './avaempreendedorismo.component';

describe('AVAEmpreendedorismoComponent', () => {
  let component: AVAEmpreendedorismoComponent;
  let fixture: ComponentFixture<AVAEmpreendedorismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVAEmpreendedorismoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AVAEmpreendedorismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

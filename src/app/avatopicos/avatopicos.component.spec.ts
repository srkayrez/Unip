import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVATopicosComponent } from './avatopicos.component';

describe('AVATopicosComponent', () => {
  let component: AVATopicosComponent;
  let fixture: ComponentFixture<AVATopicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVATopicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AVATopicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

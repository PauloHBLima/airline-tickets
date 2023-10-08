import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderMilhasComponent } from './vender-milhas.component';

describe('VenderMilhasComponent', () => {
  let component: VenderMilhasComponent;
  let fixture: ComponentFixture<VenderMilhasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenderMilhasComponent]
    });
    fixture = TestBed.createComponent(VenderMilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

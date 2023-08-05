import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch1Component } from './ch1.component';

describe('Ch1Component', () => {
  let component: Ch1Component;
  let fixture: ComponentFixture<Ch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ch1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

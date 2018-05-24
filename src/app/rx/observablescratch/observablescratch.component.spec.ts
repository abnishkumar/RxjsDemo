import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablescratchComponent } from './observablescratch.component';

describe('ObservablescratchComponent', () => {
  let component: ObservablescratchComponent;
  let fixture: ComponentFixture<ObservablescratchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablescratchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablescratchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

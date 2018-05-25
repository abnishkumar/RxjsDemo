import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotColdObservableComponent } from './hot-cold-observavle.component';

describe('HotColdObservavleComponent', () => {
  let component: HotColdObservableComponent;
  let fixture: ComponentFixture<HotColdObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotColdObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotColdObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

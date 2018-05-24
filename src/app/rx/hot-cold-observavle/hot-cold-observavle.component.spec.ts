import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotColdObservavleComponent } from './hot-cold-observavle.component';

describe('HotColdObservavleComponent', () => {
  let component: HotColdObservavleComponent;
  let fixture: ComponentFixture<HotColdObservavleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotColdObservavleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotColdObservavleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { of, combineLatest } from 'rxjs';
import { Display } from '../../baseDisplay';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rx-combineLatest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent extends Display implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  calculateBMI() {
    // Dynamically calculate the Body-Mass Index from an Observable of weight and one for height
    const weight = of(70, 72, 76, 79, 75);
    const height = of(1.76, 1.77, 1.78);
    const bmi = combineLatest(weight, height, (w, h) => w / (h * h));
    bmi.subscribe(x => {
      const result = `BMI is ${x}`;
      this.displayResult(result);
    });
  }

}

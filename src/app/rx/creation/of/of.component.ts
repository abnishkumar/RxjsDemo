import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'rx-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ofTest(): void {
    this.createEmittingSequenceOfNumber();
    this.createEmittingAnObjectArrayAndFunction();
  }

  createEmittingSequenceOfNumber(): void {
    const source = of(1, 2, 3, 4, 5);
    // output: 1,2,3,4,5
    const subscribe = source.subscribe(val => console.log('create observable sequence of number', val));
  }
  createEmittingAnObjectArrayAndFunction(): void {
    // emits values of any type
    const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
      return 'Hello';
    });
    // output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
    const subscribe = source.subscribe(val => console.log('create observable using of', val));

  }
}

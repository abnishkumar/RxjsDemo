import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'rx-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})

/*
Turn an array, promise, or iterable into an observable.
*/
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  createFrom() {
    this.createObservableFromString();
    this.createObservableFromArray();
    this.createObservableFromCollection();
    this.createObservableFromPromise();
  }

  private createObservableFromString(): void {
    // emit string as a sequence
    const source = from('Hello World');
    // output: 'H','e','l','l','o',' ','W','o','r','l','d'
    const subscribe = source.subscribe(val => console.log('observable from string', val));
  }

  private createObservableFromArray(): void {
    // emit array as a sequence of values
    const arraySource = from([1, 2, 3, 4, 5]);
    // output: 1,2,3,4,5
    const subscribe = arraySource.subscribe(val => console.log('observable from array', val));
  }

  private createObservableFromCollection(): void {
    // works on js collections
    const map = new Map();
    map.set(1, 'Hi');
    map.set(2, 'Bye');

    const mapSource = from(map);
    // output: [1, 'Hi'], [2, 'Bye']
    mapSource.subscribe(val => console.log('observable from collection', val));
  }

  private createObservableFromPromise(): void {
    // emit result of promise
    const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
    // output: 'Hello World'
    const subscribe = promiseSource.subscribe(val => console.log('observable from promise', val));
  }

}

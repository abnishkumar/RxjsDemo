import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Display } from '../baseDisplay';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rx-observablescratch',
  templateUrl: './observablescratch.component.html',
  styleUrls: ['./observablescratch.component.css']
})

/*
***************keep in mind*************
What is a Stream?
A stream in the RxJS world simply represents values over time. Users sending chat messages, 
a user clicking around on a page, a user filling out different formfields in a form; these all 
represent the basic concept of values (or events) that take place over a period of time.
So, a stream is simply a concept. One that's necessary to understand, however, because Observables
are what facilitates a stream.

1.An observable is a function that produces a stream of values to an observer over time. 
2.When you subscribe to an observable, you are an observer.
3.An observable can have multiple observers.
*/

export class ObservablescratchComponent extends Display implements OnInit, AfterViewInit {
  @ViewChild('testobservables') el: ElementRef;
  // create observer
  observer: Observer<any> = {
    next: (data) => this.displayResult(data),
    error: (error) => this.displayResult(error),
    complete: () => this.displayResult('complete')
  };
  constructor() {
    super();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.createNewObservableFromScratch();
    this.createObserverOnButtonClick();
  }

  // create observable from scratch
  private createNewObservableFromScratch() {
    /*
    create() method accepts a single argument, which is a subscribe function.
    This subscribe function accepts an observer argument.
    */
    const $stream = Observable.create((obs) => {
     // emitting a single value of '1st value' by calling obs.next().
      obs.next('1st value');
      setTimeout(() => {
        obs.complete();
      }, 1000);
      obs.next('2nd value');
    }).subscribe(this.observer);
  }

  private createObserverOnButtonClick() {
    const button = this.el.nativeElement;

    const $buttonClickStream = Observable.create((obs) => {
      button.onclick = (event) => {
        obs.next(event.clientX);
      };
    }).subscribe(this.observer);

    // unsubscribe after 5 sec
    setTimeout(() => {
      this.displayResult('sucessfully unsubscribe button');
      $buttonClickStream.unsubscribe();
    }, 5000);
  }

}

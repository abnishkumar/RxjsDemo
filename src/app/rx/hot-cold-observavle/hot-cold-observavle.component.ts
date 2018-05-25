import { Component, OnInit } from '@angular/core';
import { interval, ConnectableObservable, pipe } from 'rxjs';
import { take, publish } from 'rxjs/operators';
import { Display } from '../baseDisplay';
@Component({
  selector: 'rx-hotvscoldObservable',
  templateUrl: './hot-cold-observavle.component.html',
  styleUrls: ['./hot-cold-observavle.component.css']
})

/*
***************keep in mind*************
What’s a “Producer”?
 A producer is the source of values for your observable. It could be a web socket, it could be DOM events,
 it could be an iterator, or something looping over an array. Basically,
 it’s anything you’re using to get values and pass them to `observer.next(value)`.
*/
export class HotColdObservableComponent extends Display implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {

  }

  /*
*Cold Observables: Producers created *inside*
An observable is “cold” if its underlying producer is created and activated during subscription.
This means, that if observables are functions, then the producer is created and activated by calling that function.
  1.creates the producer
  2.activates the producer
  3.starts listening to the producer
  */
  createColdObservable(): void {
    /* since it's a "cold" observable, a new connection is created
     each time you subscribe to the same observable.*/
    // creating Cold observable
    const $stream = interval(1000).pipe(take(6));

    $stream.subscribe(val => this.displayResult('cold sub (1) : ' + val));
    // each subscriber has it's own execution context of the Observable , and
    // the Observable starts emitting value only when there is any subscriber .
    // Each subscriber receives the end to end data from Observable
    setTimeout(() => {
      $stream.subscribe(value => {
        this.displayResult('cold sub 2: ' + value);
      });
    }, 2000);

  }

  /*
  Hot Observables: Producers created *outside*
  An observable is “hot” if its underlying producer is either created or activated outside of subscription.¹
  1.shares a reference to a producer
  2.starts listening to the producer
  3.multicast (usually²)
  */
  createHotObservable(): void {
    // Creating hot Observable
    // here Publish() convert an ordinary Observable into a connectable Observable
    const $hotStream = <ConnectableObservable<any>>interval(1000).pipe(take(6), publish());
    // here Connect() instruct a connectable Observable to begin emitting items to its subscribers
    $hotStream.connect();
    // creating subscribers
    // Observable emits value regardless of the subscriber joined, each subscriber receives the same data from
    // Observable depending on the time of subscription
    setTimeout(() => {
      $hotStream.subscribe(val => {
        this.displayResult('hot subs (1):' + val);
      }
      );
    }, 3700);

    setTimeout(() => {
      $hotStream.subscribe(val => this.displayResult('hot subs (2):' + val));
    }, 3700);

    // creating lazy loaded hot Observable
    // which emits data only if there is atleast 1 subscriber
    // The first subscriber receives the end to end data but after that any
    // subscriber receives data from time of subscription

    // const source = <ConnectableObservable<any>>interval(1000).pipe(take(6), publish());
    // source.refCount();

    // setTimeout(() => {
    //   source.subscribe(val => this.displayResult('subs (1):' + val));
    // }, 2700);

    // setTimeout(function () {
    //   source.subscribe(val => this.displayResult('subs (2):' + val));
    // }, 4100);
  }
}

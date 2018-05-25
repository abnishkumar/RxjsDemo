import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Display } from '../baseDisplay';

@Component({
  selector: 'rx-behaviourSubject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.css']
})

/*
***************keep in mind*************
1.It needs an initial value as it must always return a value on subscription even if it hasn't received a next()
2.Upon subscription it returns the last value of the subject. A regular observable only triggers when it
 receives an onnext
3.at any point you can retrieve the last value of the subject in a non-observable code using the getValue() method.
4.**I would use BehaviorSubject for a data service as a angular service often initializes before
component and behavior subject ensures that the component consuming the service receives the last
 updated data even if there are no new updates since the component's subscription to this data.
*/
export class BehaviourSubjectComponent extends Display implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

  createBehaviourSubject(): void {
    // Behavior Subject

    // a is an initial value. if there is a subscription
    // after this, it would get "a" value immediately
    const bSubject = new BehaviorSubject('a');

    bSubject.next('b'); // if you comment this line Subscription got a

    bSubject.subscribe((value) => {
      this.displayResult(`Subscription got ${value}`); // Subscription got b,
      // ^ This would not happen
      // for a generic observable
      // or generic subject by default
    });

    bSubject.next('c'); // Subscription got c
    bSubject.next('d'); // Subscription got d
  }
}

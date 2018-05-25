import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Display } from '../baseDisplay';

@Component({
  selector: 'rx-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
/*
***************keep in mind*************
1.It’s an observable. It’s shaped like an observable, and has all the same operators.
2.It’s an observer. It duck-types as an observer. When subscribed to as an observable, will
  emit any value you “next” into it as an observer.
3.It multicasts. All observers passed to it via `subscribe()` are added to an internal observers list.
4.When it’s done,Subjects cannot be reused after they’re unsubscribed, completed or errored
5.**In regular subjects, the subscription is only triggered for values received after subscription is called
*/
export class SubjectComponent extends Display implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

  createSubject(): void {
    // Create new subject
    const sub = new Subject();

    sub.subscribe({
      next: (val) => this.displayResult(JSON.stringify(val)),
      error: (err) => this.displayResult(err),
      complete: () => this.displayResult('complete')
    });

    // multiple subscription
    sub.subscribe({
      next: (val) => this.displayResult(JSON.stringify(val))
    });

    sub.next('next value'); // emit value
    sub.complete(); // complete
    sub.next('other value'); // this value is not emitted
    this.createSubjectExample();
  }
  private createSubjectExample() {
    // NOTE: you can compare between subject and behaviourSubject from behaviourComponent example
    // Regular Subject

    const subject = new Subject();

    subject.next('b');

    subject.subscribe((value) => {
      this.displayResult(`Subscription got ${value}`); // Subscription wont get
      // anything at this point
    });

    subject.next('c'); // Subscription got c
    subject.next('d'); // Subscription got d
  }
}

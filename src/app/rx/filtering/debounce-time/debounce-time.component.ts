import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Display } from '../../baseDisplay';

@Component({
  selector: 'rx-debounceTime',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
/*
Discard emitted values that take less than the specified time
*/
export class DebounceTimeComponent extends Display implements OnInit {

  constructor() { super(); }
  @ViewChild('test') el: ElementRef;
  ngOnInit() {
    this.initDebounceTime();
  }

  private initDebounceTime(): void {
    const btn = this.el.nativeElement;
    const $stream = fromEvent(btn, 'input')
      .pipe(
        map((event: any) => event.target.value), // get the latest value from event
        debounceTime(2000), // wait for 2 sec to get the latest input
        distinctUntilChanged() // check if the emitted values are distinct
      )
      .subscribe({
        next: (val) => this.displayResult(val)
      });
  }

}

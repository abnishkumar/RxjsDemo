import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rx-fromEvent',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
/*
Turn event into observable sequence.
*/
export class FromEventComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    // create observable that emits click events
    const source = fromEvent(document, 'click');
    // map to string with given event timestamp
    const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
    // output (example): 'Event time: 7276.390000000001'
    const subscribe = example.subscribe(val => console.log(val));
  }

}

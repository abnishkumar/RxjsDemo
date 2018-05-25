import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-promise',
  templateUrl: './from-promise.component.html',
  styleUrls: ['./from-promise.component.css']
})
/*
Observable-creation methods were renamed/ refactored:fromPromise() => from() (this automatically detects the type)
*/
export class FromPromiseComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}

import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Display } from '../baseDisplay';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rx-observablescratch',
  templateUrl: './observablescratch.component.html',
  styleUrls: ['./observablescratch.component.css']
})
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
    const $stream = Observable.create((obs) => {
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

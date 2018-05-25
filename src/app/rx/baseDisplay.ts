import { ViewChild, ElementRef } from '@angular/core';

export class Display {

    @ViewChild('op') display: ElementRef;
    dv: HTMLElement;
    constructor() {

    }

    public displayResult(value: string) {
        // debugger;
        if (!this.dv) {
            this.dv = this.display.nativeElement;
        }
        console.log(value);
        this.dv.innerHTML += value + '</br>';
    }
}

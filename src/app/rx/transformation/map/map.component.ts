import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
/*
Simple value => use “map”, Observable => use “switchMap”
ex.1 :Rx.Observable.of(1)
  .map(x => x * 2)

 ex.2:Rx.Observable.of('some_url')
  .switchMap(url => this.http.get(url))
*/
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

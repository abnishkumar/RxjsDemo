import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombineLatestComponent } from './combination/combine-latest/combine-latest.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CombineLatestComponent
  ],
  exports: [
    CombineLatestComponent
  ]
})
export class RxModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombineLatestComponent } from './combination/combine-latest/combine-latest.component';
import { ConcatComponent } from './combination/concat/concat.component';
import { MergeComponent } from './combination/merge/merge.component';
import { ZipComponent } from './combination/zip/zip.component';
import { StartWithComponent } from './combination/start-with/start-with.component';
import { WithLatestFromComponent } from './combination/with-latest-from/with-latest-from.component';
import { FromComponent } from './creation/from/from.component';
import { FromPromiseComponent } from './creation/from-promise/from-promise.component';
import { FromEventComponent } from './creation/from-event/from-event.component';
import { OfComponent } from './creation/of/of.component';
import { DebounceTimeComponent } from './filtering/debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './filtering/distinct-until-changed/distinct-until-changed.component';
import { FilterComponent } from './filtering/filter/filter.component';
import { TakeComponent } from './filtering/take/take.component';
import { TakeUntilComponent } from './filtering/take-until/take-until.component';
import { BufferTimeComponent } from './transformation/buffer-time/buffer-time.component';
import { ConcatMapComponent } from './transformation/concat-map/concat-map.component';
import { MapComponent } from './transformation/map/map.component';
import { MergeMapComponent } from './transformation/merge-map/merge-map.component';
import { ScanComponent } from './transformation/scan/scan.component';
import { SwitchMapComponent } from './transformation/switch-map/switch-map.component';
import { TapComponent } from './utility/tap/tap.component';
import { ShareComponent } from './multicasting/share/share.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { SubjectComponent } from './subject/subject.component';
import { HotColdObservableComponent } from './hot-cold-observavle/hot-cold-observavle.component';
import { ObservablescratchComponent } from './observablescratch/observablescratch.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CombineLatestComponent,
    ConcatComponent,
    MergeComponent,
    ZipComponent,
    StartWithComponent,
    WithLatestFromComponent,
    FromComponent,
    FromPromiseComponent,
    FromEventComponent,
    OfComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
    BufferTimeComponent,
    ConcatMapComponent,
    MapComponent,
    MergeMapComponent,
    ScanComponent,
    SwitchMapComponent,
    TapComponent,
    ShareComponent,
    BehaviourSubjectComponent,
    SubjectComponent,
    HotColdObservableComponent,
    ObservablescratchComponent
  ],
  exports: [
    CombineLatestComponent,
    ConcatComponent,
    MergeComponent,
    ZipComponent,
    StartWithComponent,
    WithLatestFromComponent,
    FromComponent,
    FromPromiseComponent,
    FromEventComponent,
    OfComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
    BufferTimeComponent,
    ConcatMapComponent,
    MapComponent,
    MergeMapComponent,
    ScanComponent,
    SwitchMapComponent,
    TapComponent,
    ShareComponent,
    BehaviourSubjectComponent,
    SubjectComponent,
    HotColdObservableComponent,
    ObservablescratchComponent
  ]
})
export class RxModule { }

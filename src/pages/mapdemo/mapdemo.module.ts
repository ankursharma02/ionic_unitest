import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapdemoPage } from './mapdemo';

@NgModule({
  declarations: [
    MapdemoPage,
  ],
  imports: [
    IonicPageModule.forChild(MapdemoPage),
  ],
})
export class MapdemoPageModule {}

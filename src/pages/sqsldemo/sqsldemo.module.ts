import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SqsldemoPage } from './sqsldemo';

@NgModule({
  declarations: [
    SqsldemoPage,
  ],
  imports: [
    IonicPageModule.forChild(SqsldemoPage),
  ],
})
export class SqsldemoPageModule {}

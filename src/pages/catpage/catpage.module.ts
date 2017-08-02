import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatpagePage } from './catpage';

@NgModule({
  declarations: [
    CatpagePage,
  ],
  imports: [
    IonicPageModule.forChild(CatpagePage),
  ],
})
export class CatpagePageModule {}

import { NgModule } from '@angular/core';
import { AlphaheaderComponent } from './alphaheader/alphaheader';
import { AlphaheaderNoBurgerComponent } from './alphaheader-no-burger/alphaheader-no-burger';
import { BottomfooterComponent } from './bottomfooter/bottomfooter';
@NgModule({
	declarations: [AlphaheaderComponent,
    AlphaheaderNoBurgerComponent,
    BottomfooterComponent],
	imports: [],
	exports: [AlphaheaderComponent,
    AlphaheaderNoBurgerComponent,
    BottomfooterComponent]
})
export class ComponentsModule {}

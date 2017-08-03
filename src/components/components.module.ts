import { NgModule } from '@angular/core';
import { AlphaheaderComponent } from './alphaheader/alphaheader';
import { AlphaheaderNoBurgerComponent } from './alphaheader-no-burger/alphaheader-no-burger';
@NgModule({
	declarations: [AlphaheaderComponent,
    AlphaheaderNoBurgerComponent],
	imports: [],
	exports: [AlphaheaderComponent,
    AlphaheaderNoBurgerComponent]
})
export class ComponentsModule {}

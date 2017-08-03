import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the AlphaheaderNoBurgerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'AlphaheaderNoBurgerComponent',
  templateUrl: 'alphaheader-no-burger.html'
})
export class AlphaheaderNoBurgerComponent {
  
  constructor(public navCtrl: NavController) {}
  
  openHome() {
    this.navCtrl.push(HomePage);
  }

}

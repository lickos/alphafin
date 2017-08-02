import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetdataProvider } from '../../providers/getdata/getdata';


@IonicPage()
@Component({
  selector: 'page-catpage',
  templateUrl: 'catpage.html',
})
export class CatpagePage {
  url: string;
  items: any;
  badgeClass: string;
  image0: string;
  image1: string;
  image2: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public getdata: GetdataProvider) {
    this.url = this.navParams.get('url');
  }

  ionViewDidLoad() {
    this.getdata.getRemoteData(this.url).then(data=>{
      this.image0 = data[0];
      this.image1 = data[1];
      this.image2 = data[2];
      this.items = data;
      switch (this.items[0].category)
      {
        case "Κύπρος":
        this.badgeClass = "CyprusClass";
        break;
        case "Πολιτική":
        this.badgeClass = "PolitikiClass";
        break;
        case "Ελλάδα":
        this.badgeClass = "GreeceClass";
        break;
        case "Διεθνή":
        this.badgeClass = "DiethniClass";
        break;
        case "Αθλητικά":
        this.badgeClass = "SportsClass";
        break;
        case "Ψυχαγωγία":
        this.badgeClass = "EntertainmentClass";
        break;
        case "Υγεία":
        this.badgeClass = "HealthClass";
        break;
        case "Οικονομία":
        this.badgeClass = "EconomyClass";
        break;
        default:
        this.badgeClass = "DefaultClass"
      } 
    });
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  urlCyprus: string = 'https://alphanews.live/json/cat/1';
  urlPolitics: string = 'https://alphanews.live/json/cat/2';
  urlGreece: string = 'https://alphanews.live/json/cat/4';
  urlDiethni: string = 'https://alphanews.live/json/cat/5';
  urlSports: string = 'https://alphanews.live/json/cat/6';
  urlEntertainment: string = 'https://alphanews.live/json/cat/7';
  urlHealth: string = 'https://alphanews.live/json/cat/8';
  urlEconomy: string = 'https://alphanews.live/json/cat/9';
  Cyprus: string;
  Politics: any;
  Greece: any;
  Diethni: any;
  Sports: any;
  Entertainment: any;
  Health: any;
  Economy: any;
  

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get(this.urlCyprus).map(res => res.json()).subscribe(data => {
      this.Cyprus = data[0];
    })
    this.http.get(this.urlPolitics).map(res => res.json()).subscribe(data => {
      this.Politics = data[0];
    })
    this.http.get(this.urlGreece).map(res => res.json()).subscribe(data => {
      this.Greece = data[0];
    })
    this.http.get(this.urlDiethni).map(res => res.json()).subscribe(data => {
      this.Diethni = data[0];
    })
    this.http.get(this.urlSports).map(res => res.json()).subscribe(data => {
      this.Sports = data[0];
    })
    this.http.get(this.urlEntertainment).map(res => res.json()).subscribe(data => {
      this.Entertainment = data[0];
    })
    this.http.get(this.urlHealth).map(res => res.json()).subscribe(data => {
      this.Health = data[0];
    })
    this.http.get(this.urlEconomy).map(res => res.json()).subscribe(data => {
      this.Economy = data[0];
    })
  }

}

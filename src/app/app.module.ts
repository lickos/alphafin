import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HttpModule } from "@angular/http";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { CatpagePage } from "../pages/catpage/catpage";
import { ArticlePage } from "../pages/article/article";

import { AlphaheaderComponent } from "../components/alphaheader/alphaheader";
import { AlphaheaderNoBurgerComponent } from "../components/alphaheader-no-burger/alphaheader-no-burger";
import { BottomfooterComponent } from "../components/bottomfooter/bottomfooter";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { OneSignal } from "@ionic-native/onesignal";
import { StreamingMedia } from "@ionic-native/streaming-media";

import { RemovequotesPipe } from "../pipes/removequotes/removequotes";

import { GetdataProvider } from "../providers/getdata/getdata";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CatpagePage,
    AlphaheaderComponent,
    AlphaheaderNoBurgerComponent,
    BottomfooterComponent,
    ListPage,
    ArticlePage,
    RemovequotesPipe
  ],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CatpagePage,
    ArticlePage,
    AlphaheaderComponent,
    AlphaheaderNoBurgerComponent,
    BottomfooterComponent,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    StreamingMedia,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GetdataProvider
  ]
})
export class AppModule {}

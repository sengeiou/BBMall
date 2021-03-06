import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Http, HttpModule } from '@angular/http';
import { StoryPage } from './story/story.page';
import { GoodsPage } from './goods/goods.page';
import { GoodscategoryPage } from './goodscategory/goodscategory.page';
import { CheckoutPage } from './checkout/checkout.page';

@NgModule({
  declarations: [AppComponent,StoryPage,GoodsPage,GoodscategoryPage],
  entryComponents: [StoryPage,GoodsPage,GoodscategoryPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

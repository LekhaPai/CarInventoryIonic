import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddModelComponent } from './add-model/add-model.component';
import { DataModelService } from './data-model-service';
import { FormsModule } from '@angular/forms';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    AddModelComponent,
    ViewInventoryComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    DataModelService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

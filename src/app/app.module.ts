import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { DogsService } from './services/dogs.service';
import { ObjToArrayPipe } from './pipes/obj-to-array/obj-to-array.pipe';

// Components
import { ImgComponent } from './components/img/img.component';
import { RazasComponent } from './components/razas/razas.component';

@NgModule({
  declarations: [
    AppComponent,
    RazasComponent,
    ObjToArrayPipe,
    ImgComponent
  ],
  entryComponents: [
    RazasComponent,
    ImgComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    DogsService,
    StatusBar,
    SplashScreen,
    ObjToArrayPipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

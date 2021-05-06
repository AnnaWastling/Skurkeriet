import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoriaComponent } from './historia/historia.component';
import { SkurkerietComponent } from './skurkeriet/skurkeriet.component';
import { FoljOssComponent } from './folj-oss/folj-oss.component';
import { TengilComponent } from './tengil/tengil.component';
import { SpeletComponent } from './spelet/spelet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HistoriaComponent,
    SkurkerietComponent,
    FoljOssComponent,
    TengilComponent,
    SpeletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoriaComponent } from './historia/historia.component';
import { SkurkerietComponent } from './skurkeriet/skurkeriet.component';
import { FoljOssComponent } from './folj-oss/folj-oss.component';
import { TengilComponent } from './tengil/tengil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { StartComponent } from './start/start.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { SpelkortComponent } from './spelkort/spelkort.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SpeletComponent } from './spelet/spelet.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';



@NgModule({
  declarations: [
    AppComponent,
    HistoriaComponent,
    SkurkerietComponent,
    FoljOssComponent,
    TengilComponent,
    StartComponent,
    SpelkortComponent,
    SpeletComponent,
    SplashscreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaComponent } from './historia/historia.component';
import { SkurkerietComponent } from './skurkeriet/skurkeriet.component';
import { FoljOssComponent } from './folj-oss/folj-oss.component';
import { TengilComponent } from './tengil/tengil.component';
import { SpeletComponent } from './spelet/spelet.component';
import { StartComponent } from './start/start.component';
import { TappanComponent } from './tappan/tappan.component';
import { TrappanComponent } from './trappan/trappan.component';
import { FiketComponent } from './fiket/fiket.component';
import { MicrorummetComponent } from './microrummet/microrummet.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'skurkeriet', component: SkurkerietComponent },
  { path: 'folj-oss', component: FoljOssComponent },
  { path: 'tengil', component: TengilComponent },
  { path: 'spelet', component: SpeletComponent },
  { path: '1234', component: TappanComponent },
  { path: '5678', component: TrappanComponent },
  { path: '9123', component: FiketComponent },
  { path: '9123', component: MicrorummetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
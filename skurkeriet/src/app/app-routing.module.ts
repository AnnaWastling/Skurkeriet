import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaComponent } from './historia/historia.component';
import { SkurkerietComponent } from './skurkeriet/skurkeriet.component';
import { FoljOssComponent } from './folj-oss/folj-oss.component';
import { TengilComponent } from './tengil/tengil.component';
import { StartComponent } from './start/start.component';
import { SpeletComponent } from './spelet/spelet.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'skurkeriet', component: SkurkerietComponent },
  { path: 'folj-oss', component: FoljOssComponent },
  { path: 'tengil', component: TengilComponent },
  { path: 'spelet', component: SpeletComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
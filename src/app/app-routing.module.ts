import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaincontentComponent} from './maincontent/maincontent.component';
import {MobileappsPageComponent} from './pages/mobileapps-page/mobileapps-page.component';
import {WebservicesComponent} from './pages/webservices/webservices.component';
import {AugmentedrealityComponent} from './pages/augmentedreality/augmentedreality.component';
import {DesignComponent} from './pages/design/design.component';
import {DevelopmentComponent} from './pages/development/development.component';


const appRoutes: Routes = [
  {path: 'all', component: MaincontentComponent},
  {path: '', redirectTo: 'all', pathMatch: 'full'},
  {path: 'mobileapps', component: MobileappsPageComponent},
  {path: 'webservices', component: WebservicesComponent},
  {path: 'augmentedreality', component: AugmentedrealityComponent},
  {path: 'design', component: DesignComponent},
  {path: 'development', component: DevelopmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

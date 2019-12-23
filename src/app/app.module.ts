import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MaincontentComponent} from './maincontent/maincontent.component';
import {ContactusComponent} from './contactus/contactus.component';
import {FooterComponent} from './footer/footer.component';
import {MobileappsPageComponent} from './pages/mobileapps-page/mobileapps-page.component';
import { WebservicesComponent } from './pages/webservices/webservices.component';
import { AugmentedrealityComponent } from './pages/augmentedreality/augmentedreality.component';
import { DesignComponent } from './pages/design/design.component';
import { DevelopmentComponent } from './pages/development/development.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaincontentComponent,
    ContactusComponent,
    FooterComponent,
    MobileappsPageComponent,
    WebservicesComponent,
    AugmentedrealityComponent,
    DesignComponent,
    DevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

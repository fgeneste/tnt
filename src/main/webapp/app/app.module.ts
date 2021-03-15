import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TntSharedModule } from 'app/shared/shared.module';
import { TntCoreModule } from 'app/core/core.module';
import { TntAppRoutingModule } from './app-routing.module';
import { TntHomeModule } from './home/home.module';
import { TntEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TntSharedModule,
    TntCoreModule,
    TntHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TntEntityModule,
    TntAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class TntAppModule {}

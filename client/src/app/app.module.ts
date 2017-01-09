import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';


/* New */
//import {TranslateModule, TranslateLoader, TranslateStaticLoader} from "ng2-translate/ng2-translate";

/* Import material design module */

import { MaterialModule } from '@angular/material';
import 'hammerjs';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { AppRoutingModule } from './app-routing.module';

// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

import { ModelModule } from './model/index';
import { ModelService } from './service/index';

//import { OperatorComponent } from './operator';
/*import { NetworkComponent } from './network';
import { TransporterComponent } from './home';
import { CalendarComponent } from './home';
import { POIComponent } from './home';
import { StopComponent } from './home';
import { LineComponent } from './home';
import { HourComponent } from './home';*/


//import '../sass/main.scss';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  ModelService
];


/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],

  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    /*TranslateModule.forRoot({ 
          provide: TranslateLoader,
          useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
          deps: [Http]
     }),*/

    ModelModule
  ],
  
  declarations: [
    AppComponent      
  ],

  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public modelService: ModelService) {}
}


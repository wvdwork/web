import { NgModule, enableProdMode  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

//modules
import  { AppRoutingModule } from './app-routing.module';


//strategy
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";

import { PageNotFoundComponent } from './error-page/page-not-found.component';

//toast
import {ToastService} from './shared/toast/toast.service';
import {ToastBoxComponent} from './shared/toast/toast-box.component';
import {ToastComponent} from './shared/toast/toast.component';

//spin
import { SpinComponent} from './shared/spin/spin.component';
import { SpinService } from './shared/spin/spin.service';
import {AppService} from "./app.service";

enableProdMode();

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        HttpModule,

    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        ToastBoxComponent,
        ToastComponent,
        SpinComponent
    ],
    providers: [
      AppService,
      SelectivePreloadingStrategy,
      ToastService,
      SpinService
    ],
  entryComponents:[],
    exports: [
      ToastBoxComponent,
      SpinComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

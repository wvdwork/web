import { NgModule } from '@angular/core';
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
        PageNotFoundComponent
    ],
    providers: [
      SelectivePreloadingStrategy
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

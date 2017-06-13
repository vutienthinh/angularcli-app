import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CountryModule } from './pages/country-component/country-component.module';

import { AppComponent } from './app.component';
import { default as PageDirectory} from './app.pagedirectory';
//import PageDirectory from './app.pagedirectory';
import _ from "lodash";

@NgModule({
  //declarations: _.union([AppComponent], PageDirectory.getPages()),
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CountryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

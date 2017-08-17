import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { aRouting } from './app.routing';
import { AppComponent } from './app.component';
import { CountryModule } from './pages/country-component/country-component.module';
import { default as PageDirectory} from './app.pagedirectory';
//import PageDirectory from './app.pagedirectory';
import _ from "lodash";
import { CountriesComponentComponent } from './pages/countries-component/countries-component.component';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  //declarations: _.union([AppComponent], PageDirectory.getPages()),
  declarations: [AppComponent, CountriesComponentComponent, LazyComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CountryModule,
    aRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CountryRoutingModule } from './country-component.routing';
import { CountryComponentComponent } from './country-component.component';
import { CountryLazyComponent } from './country-lazy/country-lazy.component';

@NgModule({
  declarations: [CountryComponentComponent, CountryLazyComponent],
  imports: [
    //CommonModule,
    //RouterModule.forChild(childRoutes),
    CountryRoutingModule
  ],
  providers: [],
  //exports: [CountryComponentComponent]
})
export class CountryModule { }

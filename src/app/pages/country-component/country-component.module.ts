import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CountryComponentComponent } from './country-component.component';


@NgModule({
  declarations: [CountryComponentComponent],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [CountryComponentComponent]
})
export class CountryModule { }

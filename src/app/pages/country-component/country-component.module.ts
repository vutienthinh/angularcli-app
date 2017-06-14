import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CountryComponentComponent } from './country-component.component';

const childRoutes: Routes = [
	{path: '', component: CountryComponentComponent}
]

@NgModule({
  declarations: [CountryComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
  ],
  providers: [],
  exports: [CountryComponentComponent]
})
export class CountryModule { }

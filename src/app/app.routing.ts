import { RouterModule, Routes } from '@angular/router';
import { CountryComponentComponent } from '../app/pages/country-component/country-component.component';
import { CountriesComponentComponent } from '../app/pages/countries-component/countries-component.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  { path: 'countries', component: CountriesComponentComponent },
  { path: 'country', loadChildren: 'app/pages/country-component/country-component.module#CountryModule' },
];

export default appRoutes;

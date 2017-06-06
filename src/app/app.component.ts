import { Component, ViewEncapsulation } from '@angular/core';
import { CountryComponentComponent } from '../app/pages/country-component/country-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,*/
  styles: [String(require('../sass/main.scss'))],
  entryComponents: [CountryComponentComponent],
})
export class AppComponent {
  title = 'app works!';
}

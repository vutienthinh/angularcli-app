import { Component } from '@angular/core';
import { CountryComponentComponent } from '../app/pages/country-component/country-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [CountryComponentComponent],
})
export class AppComponent {
  title = 'app works!';
}

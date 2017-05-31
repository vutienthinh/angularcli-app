import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { SharedService } from '../src/app/providers/shared-service.service';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [{ provide: 'SharedService', useClass: SharedService }]).then(appRef => {console.log(appRef)});

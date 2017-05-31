import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  data = {};

  constructor() {
    console.log('Hello SharedService Provider');
  }

  setter(field: string, value: any) {
	    this.data[field] = value;
	}

	getter(field: string) {
	    return this.data[field];
	}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-component',
  templateUrl: './country-component.component.html',
  styleUrls: ['./country-component.component.scss']
})
export class CountryComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //IMPORTANT
  //ng g c pages/country-component -> generate new folder with relative path
}

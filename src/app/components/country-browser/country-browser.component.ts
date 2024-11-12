import { Component } from '@angular/core';
import { CountryService } from '../../shared/services/country.service';

@Component({
  selector: 'app-country-browser',
  templateUrl: `./country-browser.component.html`,
})
export class CountryBrowserComponent {
  countryCode = '';
  country: any;

  constructor(private countryService: CountryService) {}

  fetchCountry() {
    if (this.countryCode) {
      console.log(this.countryCode);
      this.countryService
        .getCountry(this.countryCode)
        .subscribe((result) => (this.country = result.data['country']));
    }
  }
}

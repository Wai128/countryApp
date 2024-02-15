import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

public country?: Country;

  constructor(

    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router ){

  }
  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode(id)),
    )
      .subscribe( country => {
        /*console.log({country})*/

        if (!country){
          return this.router.navigateByUrl('');
        }

        /*console.log("Tenemos un pais");*/
        return this.country = country;



        /*this.countriesService.searchCountryByAlphaCode ( id)
          .subscribe(country => {
            console.log( {country} )
          });
          */

    });
  }



}

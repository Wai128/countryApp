import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { SearchBoxComponent } from '../../shared/components/search-box/search-box.component';

@Injectable({providedIn: 'root'})

export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode( code: string): Observable<Country | null > {
    const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url) /*Este es mi observable */
    /*con el pipe podemos realizar una infinidad de cosas web y buscamos map */
    .pipe(
      map(countries => countries.length > 0 ? countries[0]:null),
      catchError(() => of (null))

    );
  }

  searchCapital (term : string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${term}`;

    return this.http.get<Country[]>(url) /*Este es mi observable */
    /*con el pipe podemos realizar una infinidad de cosas web y buscamos map */
    .pipe(
      catchError(() => of ([]))

    );

  }

  searchCountry (pais : string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${pais}`;

    return this.http.get<Country[]>(url) /*Este es mi observable */
    /*con el pipe podemos realizar una infinidad de cosas web y buscamos map */
    .pipe(
      catchError(() => of ([]))

    );

  }

  searchRegion (region : string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url) /*Este es mi observable */
    /*con el pipe podemos realizar una infinidad de cosas web y buscamos map */
    .pipe(
      catchError(() => of ([]))

    );

  }


}

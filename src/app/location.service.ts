import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Location } from './pregunta02/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiUrl = 'https://rickandmortyapi.com/api/location';

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.http.get<{results:Location[]}>(this.apiUrl).pipe(
      map(response => response.results.filter(location => location.type === 'Planet'))
    );
  }
}

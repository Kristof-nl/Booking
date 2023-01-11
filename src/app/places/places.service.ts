import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place
    ('p1',
     'Manhatta Mansion',
     'In the heart of the New York City',
     'https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg', 149.99),
     new Place
    ('p2',
     'L\'Amour Tourjours',
     'Romantic place in Paris',
     'https://cdn.sortiraparis.com/images/1001/83517/753564-visuel-paris-tour-eiffel-rue.jpg',
      189.99),
    new Place
    ('p3',
     'The Foggy Place',
     'Not your average city trip',
     'https://cdn.sortiraparis.com/images/1001/83517/753564-visuel-paris-tour-eiffel-rue.jpg',
      99.99),
  ];

  getPlaces() {
    return [...this._places];
  }

  constructor() { }
}

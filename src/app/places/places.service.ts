import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public _places: Place[] = [
    new Place
    ('p1',
     'Manhatta Mansion',
     'In the heart of the New York City',
     'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg1MzU3MDgyMzM1/new-york-city-3.jpg', 149.99),
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
     'https://images.squarespace-cdn.com/content/v1/582a9ec3d2b85756e36fdf02/1566581217922-TTOIQI6CGDDJV4K9Y91P/IMG_4378-3jpg.jpg?format=2500w',
      99.99),
  ];

  getPlaces() {
    return [...this._places];
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { Offer } from './offers/offer.model';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Manhattan Apartment', 'In the heart of NYC', 'https://images.wsj.net/im-5320?width=1280&size=1', 199.49),
    new Place('p2', 'Canary Wharf Apartment', 'In the heart of Canary Wharf', 'https://www.themadison.co.uk/media/1021/theresidences_1.jpg', 149.49),
    new Place('p3', 'Sheffield Apartment', 'In the heart of sheffield', 'https://i2-prod.examinerlive.co.uk/incoming/article18594666.ece/ALTERNATES/s615b/0_The-interior-of-a-typical-home-in-Park-Hill.jpg', 129.99)

  ];

  private _offers: Offer[] = [
    new Offer('o1', 'Manhattan Apartment', 'Top Cat', 199.49),
    new Offer('o2', 'Canary Wharf Apartment', 'Daddy Big Bucks', 1000),
    new Offer('o3', 'Sheffield Aparment', 'Northern Monkey', 45.49)
  ];

  get places() {
    return [...this._places];
  }

  // get offers() {
  //   return [...this._offers];
  // }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }

  // getOffer(id: string) {
  //   return{...this._offers.find(o => o.id === id)};
  // }

}

import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Offer } from './offer.model';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {


  loadedOffers: Offer[];

  constructor(private offersService: PlacesService) { }

  ngOnInit() {
    this.loadedOffers = this.offersService.offers;
  }

}

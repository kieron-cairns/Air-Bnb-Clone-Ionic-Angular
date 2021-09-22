import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { Offer } from './offer.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {


  loadedOffers: Offer[];
  loadedPlaces: Place[];

  constructor(private placeService: PlacesService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadedOffers = this.placeService.offers;
    this.loadedPlaces = this.placeService.places;
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

}

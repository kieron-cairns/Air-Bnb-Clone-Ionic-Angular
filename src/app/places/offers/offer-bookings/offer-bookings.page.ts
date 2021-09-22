import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { Offer } from '../offer.model';


@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: Place;
  offer: Offer;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placesService: PlacesService) { }

  ngOnInit() {

    //on init, subscribe to
    //subscirobing on nginit will auto update based on the url
    /*** Places ***/
    this.route.paramMap.subscribe(paraMap => {
      //if we do not have a place id, navigate away from the page using
      //NavController

      if(!paraMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        //return so that no more code is executed in this method.
        return;
      }
      //use the places serivce to find the place by is id
      this.place = this.placesService.getPlace(paraMap.get('placeId'));
    });

    /*** Offers ***/
    this.route.paramMap.subscribe(paraMap => {
      //if we do not have a place id, navigate away from the page using
      //NavController

      if(!paraMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        //return so that no more code is executed in this method.
        return;
      }
      //use the places serivce to find the place by is id
      this.offer = this.placesService.getOffer(paraMap.get('placeId'));
    });

  }

}

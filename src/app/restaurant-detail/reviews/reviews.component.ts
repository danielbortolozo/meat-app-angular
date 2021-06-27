import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurant.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

   


  reviews: Observable<any> 

  constructor(private restaurantsService: RestaurantsService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    this.reviews = this.restaurantsService.reviewsOfRestaurant(this.activateRoute.parent
                                                                   .snapshot.params['id']);
  }

}

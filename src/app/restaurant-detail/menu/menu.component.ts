import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurant.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  restaurant: Restaurant  


  constructor(private restaurantService: RestaurantsService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

}

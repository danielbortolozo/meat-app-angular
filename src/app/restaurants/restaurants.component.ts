import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RestaurantsService } from './restaurant.service';
import { Restaurant } from './restaurant/restaurant.model';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  
  
  restaurants: Restaurant[]
  visibleSearch: boolean = false;

  searchForm: FormGroup
  searchControl: FormControl 

  constructor(private restaurantsService: RestaurantsService,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl

    })

    this.searchControl.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap(searchTerm =>
          this.restaurantsService
          .rests(searchTerm)
          .catch(error => Observable.from([])))
      .subscribe(restaurants => this.restaurants = restaurants);
   

    this.restaurantsService.rests()
      .subscribe(resturants => this.restaurants = resturants)
  }

  search(){    
    if (this.visibleSearch === false) {
      this.visibleSearch = true;
    }else {
      this.visibleSearch = false;
    }   
  }

}

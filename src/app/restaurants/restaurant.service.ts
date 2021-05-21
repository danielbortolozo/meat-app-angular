import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MEAT_API } from "../app.api";
import { Observable } from "rxjs/Observable";
import { Restaurant } from "./restaurant/restaurant.model";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app.error-handle";


@Injectable()
export class RestaurantsService {
   
          
    constructor(private http: Http) {}

    rests() : Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

}
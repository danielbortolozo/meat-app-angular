import { Injectable } from "@angular/core";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/ShoppingCartService";



@Injectable()
export class OrderService {



    constructor(private cartService: ShoppingCartService){}

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    }

    removeItem(item: CartItem) {
        this.cartService.removeItem(item);
    }


}
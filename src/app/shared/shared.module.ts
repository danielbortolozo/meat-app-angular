import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderService } from "app/order/order.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/ShoppingCartService";
import { RestaurantsService } from "app/restaurants/restaurant.service";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RastingComponent } from "./rasting/rasting.component";




@NgModule({
    declarations: [InputComponent, RadioComponent, RastingComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [
        InputComponent, RadioComponent, RastingComponent,
        FormsModule, ReactiveFormsModule, CommonModule
    ] 
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ RestaurantsService,
                ShoppingCartService, 
                OrderService]
        }
    }


}
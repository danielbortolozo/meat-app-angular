import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { OrdemItemsComponent } from "./ordem-items/ordem-items.component";
import { OrderComponent } from "./order.component";


const ROUTES: Routes = [

    {path: '', component: OrderComponent}
]

@NgModule({
    declarations: [OrderComponent, OrdemItemsComponent, DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)],
    exports: []
})

export class OrderModule {}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
export class SharedModule {}
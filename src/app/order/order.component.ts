import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup

  delivery: number = 8;

  emailPattern= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  numberPattern=/^[0-9]*$/;
  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MONEY'},
    {label: 'Cartao Credito', value: 'CARD_CREDITO'},
    {label: 'Cartao Debito', value: 'CARD_DEBITO'}
  ]


  constructor(private orderService: OrderService, 
              private router: Router,
              private formBuild: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuild.group({
      name: this.formBuild.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuild.control('', [Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuild.control('', [Validators.pattern(this.emailPattern)]),
      address: this.formBuild.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuild.control('',[Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuild.control(''),
      paymentOption: this.formBuild.control('',[Validators.required])
      
    }, {validator: OrderComponent.equalTo})   

  }

  static equalTo(group: AbstractControl): {[key: string]:boolean} {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation')

    if (!email || !emailConfirmation) {
      return undefined;
    }
    if (email.value !== emailConfirmation.value) {
      return {emailsNotMatch: true}
    }
    return undefined
 }

  

  itemsValue(): number {
    return this.orderService.itemsValue();
  } 

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem) {
     this.orderService.increaseQty(item);
  }
  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {

    this.orderService.removeItem(item)
  }

  checkOrder(order: Order) {

    order.orderItems = this.cartItems()
    .map((item: CartItem)=>new OrderItem(item.quantity, item.menuItem.id))

    this.orderService.checkOrder(order).subscribe((orderId: string) => {
       
         this.router.navigate(['/order-summary'])
         console.log(`Compora conclu??da: ${orderId}`);
        this.orderService.clear();

      }
    )
   
    console.log(order);
    
  }
}

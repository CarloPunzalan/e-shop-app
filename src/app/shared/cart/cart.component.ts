import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cart
  cartList = []
  constructor() { }
  totalPrice = 0;
  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem("books")) ? JSON.parse(localStorage.getItem("books")) : []
    this.cartList = this.cart
    this.computeTotalPrice(this.cartList)
  }

  computeTotalPrice(cartCompute)
  {
    for(let i = 0; i<cartCompute.length;i++)
    {
      this.totalPrice = this.totalPrice + cartCompute[i].price
      localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice));
    }

  }
}

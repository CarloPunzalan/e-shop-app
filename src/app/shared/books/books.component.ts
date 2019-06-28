import { Component, OnInit, Input } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @Input() book
  cart = []
  constructor() { }

  ngOnInit() {
  }

  addToCart(data)
  {
    console.log(data)
    console.log("Title: "+ data.ID)
    this.cart.push({
      id:data.ID,
      title:data.Title,
      desc:data.Description,
      price: data.PageCount
    })
    console.log(this.cart)
    localStorage.setItem("books", JSON.stringify(data))

  }

}

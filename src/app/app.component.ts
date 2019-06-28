import { Component } from '@angular/core';
import { HttpClientService } from './services/http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-shop-app';
  books : any
  cart = []

  constructor(
    private httpClientService : HttpClientService){
  }

  ngOnInit(){
    this.httpClientService
    .get('https://fakerestapi.azurewebsites.net/api/Books')
    .subscribe(data=>{
      console.log(data)
      this.books = data
    })
  }

  post(){
    let body = {
      title:'Angular E-Commerce Application',
      body:'Angular E-Commerce Application Body'      
    }
    this.httpClientService
    .post('https://fakerestapi.azurewebsites.net/api/Books', body)
    .subscribe(books=>{
      console.log(books)
    },
    (error=>{
      console.error(error)
    })
    )
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
    localStorage.setItem("books", JSON.stringify(this.cart))

  }

}

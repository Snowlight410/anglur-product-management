import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent {
  productName:string="";
  productDescription:string="";
  productPrice:number=0;
  productImage:string = ""
  ngOnInit(): void {
    const product = window.history.state; // Retrieve the navigation state
    console.log(product.name)
    this.productName =product.name
    this.productDescription = product.description,
    this.productPrice = product.price
    this.productImage = product.image
  }
  constructor(private router:Router){}
  
  goHome(){
  this.router.navigate(["/"])
  alert("Thank for Shopping")
}
  }
  

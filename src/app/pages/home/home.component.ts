import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductitemsComponent } from '../../components/productitems/productitems.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,ProductitemsComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products = [
    { 
      id: 1, 
      name: "Laptop", 
      price: 999.99, 
      category: "Electronics", 
      description: "Powerful laptop with high-resolution display and fast processor.", 
      image: "https://readymadeui.com/images/product1.webp"
    },
    { 
      id: 2, 
      name: "Headphones", 
      price: 149.99, 
      category: "Electronics", 
      description: "Wireless headphones with noise-cancelling technology and long battery life.", 
      image: "https://readymadeui.com/images/product1.webp"
    },
    { 
      id: 3, 
      name: "T-shirt", 
      price: 19.99, 
      category: "Clothing", 
      description: "Comfortable cotton t-shirt available in various colors and sizes.", 
      image: "https://readymadeui.com/images/product1.webp"
    },
    { 
      id: 4, 
      name: "Jeans", 
      price: 49.99, 
      category: "Clothing", 
      description: "Classic denim jeans with a modern fit and durable stitching.", 
      image: "https://readymadeui.com/images/product1.webp"
    },
    { 
      id: 5, 
      name: "Book", 
      price: 9.99, 
      category: "Books", 
      description: "Best-selling novel that captures the essence of human struggle and triumph.", 
      image: "https://readymadeui.com/images/product1.webp"
    }
  ]  
constructor(private router:Router){}
  productView(id:any){
    this.router.navigate(["/product",id],{state:this.products.find((p)=>p.id ==id)})
  }
}

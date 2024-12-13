import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-productitems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productitems.component.html',
  styleUrl: './productitems.component.scss'
})
export class ProductitemsComponent {
  @Input() products:any;
  @Output() viewProduct = new EventEmitter<string>();
  view(){
    this.viewProduct.emit(this.products.id)
    }
}

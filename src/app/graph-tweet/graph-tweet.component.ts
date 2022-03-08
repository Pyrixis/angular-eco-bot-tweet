import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-graph-tweet',
  templateUrl: './graph-tweet.component.html',
  styleUrls: ['./graph-tweet.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}

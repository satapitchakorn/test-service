import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductAPIService } from '../../services/product-api.service';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  ageOption: string = "any";
  genderOption: string = "any";
  products: Product[] = [];
  constructor(private router: Router, private api: ProductAPIService, private service: ProductService) { }

  ngOnInit(): void {
    this.api.getAllProduct().subscribe((products) => {
      return (this.products = products);
    });
  }

  searchProduct(age, gender) {
    if (age == "any" && gender == "any") {
      this.api.getAllProduct().subscribe((products) => {
        return (this.products = products);
      });
    }
    else if (age == "any") {
      this.api.getAllProduct().subscribe((products) => {
        return (this.products = products.filter((p) => { return p.gender == gender; }));
      });
    }
    else if (gender == "any") {
      this.api.getAllProduct().subscribe((products) => {
        return (this.products = products.filter((p) => { return p.age == age }));
      });
    }
    else {
      this.api.getAllProduct().subscribe((products) => {
        return (this.products = products.filter((p) => { return p.age == age && p.gender == gender; }));
      });
    }
  }

  onClickProduct(product: Product, id: number) {
    this.service.addItem(product); //add item เข้าสู่ service เพื่อทำการเซฟข้อมูล
    this.router.navigateByUrl(`/product/${id}`);
  }
}

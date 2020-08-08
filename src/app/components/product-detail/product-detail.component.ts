import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductAPIService } from 'src/app/services/product-api.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetail: Product
  constructor(public api: ProductAPIService, private route: ActivatedRoute, private service: ProductService) {
    this.productDetail = service.getItems() //เรียกใช้งาน service ที่มีการ add item ก่อนหน้านี้
  }

  onAddtoCart() {
  }

  array(n: number): any[] {
    return Array(n);
  }

  ngOnInit(): void {
    const productId: number = parseInt(this.route.snapshot.paramMap.get("id"))
    if (Object.keys(this.productDetail).length === 0)  // ถ้าตัว service ไม่มีข้อมูล จะทำการดึงจาก API ใหม่
      this.api.getSpecificProduct(productId).subscribe(p => {
        this.productDetail = p
      })
  }
}

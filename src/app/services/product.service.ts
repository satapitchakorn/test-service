import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private currentUserSubject: BehaviorSubject<Product>;

  public currentUser: Observable<Product>; constructor() {
    this.currentUserSubject = new BehaviorSubject<Product>(new Product());
    this.currentUser = this.currentUserSubject.asObservable();
  }

  getItems(): Product {
    return this.currentUserSubject.getValue();

  }
  addItem(product: Product) {
    this.currentUserSubject.next(product);
  }
  removeItem() {
    this.currentUserSubject.next(null);
  }
}

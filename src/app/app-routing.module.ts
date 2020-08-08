import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'search', component: SearchProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: 'search' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

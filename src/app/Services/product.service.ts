import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  auth_token = localStorage.getItem('token');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.auth_token}`,
  });

  constructor(private http: HttpClient) {}
  params = new HttpParams().set('page', '1').set('limit', '6');

  // getProduct() {
  //   return this.http.get('http://localhost:3000/products/', {
  //     // params: this.params,
  //     params: new HttpParams().set('page', '1').set('limit', '6'),
  //   });
  // }

  // getPage(index: Number) {
  //   return this.http.get('http://localhost:3000/products/', {
  //     // params: this.params,
  //     params: new HttpParams().set('page', +index).set('limit', '6'),
  //   });
  // }

  getAllProducts(total: any) {
    return this.http.get('http://localhost:3000/products/', {
      // params: this.params,
      params: new HttpParams().set('page', '1').set('limit', total),
      // params: new HttpParams().set('page', '1').set('limit', '6'),
    });
  }

  getProductByCategory(total: any, category: any) {
    return this.http.get('http://localhost:3000/products/', {
      // params: this.params,
      params: new HttpParams()
        .set('page', '1')
        .set('limit', total)
        .set('category', category),

      // params: new HttpParams().set('page', '1').set('limit', '6'),
    });
  }
  updateSold(id: any, sold: any) {
    return this.http.put(
      `http://localhost:3000/products/${id}`,
      {
        sold: +sold + 1,
      },
      {
        headers: this.headers,
      }
    );
  }

  getProductById(id: any) {
    return this.http.get(`http://localhost:3000/products/${id}`, {
      headers: this.headers,
    });
  }
}

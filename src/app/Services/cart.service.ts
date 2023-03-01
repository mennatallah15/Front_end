import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  auth_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2U4MjVkZTAwZmVlNGMzZWZkM2I5M2MiLCJpYXQiOjE2Nzc1MzgzNjF9.vqmRJ1rfq5k2cKoWOq5iDLLz65BsJTW7PWk-SrFCmuk';

  // auth_token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2U5MzNjZmJmOGU0OWY0OGM0OGY3MGUiLCJpYXQiOjE2Nzc2Mjk1NzZ9.l4t-drFSu5anoyrgcNN1QVjFCSDCc4v7WENCPiy305Y';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.auth_token}`,
  });
  getCart() {
    return this.http.get('http://localhost:3000/cart', {
      headers: this.headers,
    });
  }

  addToCart(productId: any) {
    return this.http.post(
      'http://localhost:3000/cart/',
      {
        productId: productId,
      },
      {
        headers: this.headers,
      }
    );
  }
  reduceQuantity(productId: any) {
    return this.http.post(
      'http://localhost:3000/cart/',
      {
        productId: productId,
        minus: true,
      },
      {
        headers: this.headers,
      }
    );
  }

  deleteProduct(productId: any) {
    return this.http.delete(`http://localhost:3000/cart/${productId}`, {
      headers: this.headers,
    });
  }

  clearCart() {
    return this.http.delete('http://localhost:3000/cart/', {
      headers: this.headers,
    });
  }

  // sold(id:any){
  //   return this.http.put(`localhost:3000/products/${id}`,{

  //       sold:

  //     },{})

  // }
}

/*
let params = new URLSearchParams();
    params.set('logNamespace', logNamespace);

    this._Http.get(`${API_URL}/api/v1/data/logs`, { search: params })
}
*/

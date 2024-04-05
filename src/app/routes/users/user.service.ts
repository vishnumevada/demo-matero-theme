import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://6601643887c91a11641abbcf.mockapi.io/api/v1/products';

  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, product);
  }

  updateProduct(productId: any, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${productId}`, product);
  }

  deleteProduct(productId: any): Observable<any> {
    return this, this.http.delete(`${this.apiUrl}/${productId}`);
  }
}

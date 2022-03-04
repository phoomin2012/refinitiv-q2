import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategoryResponse } from 'src/types';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  categoryUrl = 'https://api.publicapis.org/categories'

  constructor(private http: HttpClient) { }

  getCategory(): Observable<ICategoryResponse> {
    return this.http.get<ICategoryResponse>(this.categoryUrl)
  }
}

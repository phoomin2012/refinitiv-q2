import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoryService } from './category.service';
import { Observable } from 'rxjs';
import { ICategoryResponse } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private categoryService: CategoryService) { }

  filter = new FormControl('')
  list: string[] = [];

  async fetchData() {
    return fetch('https://api.publicapis.org/categories')
  }

  ngOnInit(): void {
    this.getCategory()
  }

  getCategory(): void {
    this.categoryService.getCategory().subscribe((response: ICategoryResponse) => this.list = response.categories);
  }

  get filteredList() {
    const regex = new RegExp(this.filter.value)
    console.log(this.list)
    return this.list.filter(category => regex.test(category))
  }
}

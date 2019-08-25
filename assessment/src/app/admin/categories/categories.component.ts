import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryName: string;
  categoryForm: FormGroup;
  categoriesList;

  constructor(private fb: FormBuilder, private ac: CommonService) { }

  ngOnInit() {
    this.listAllCategories();

    this.categoryForm = this.fb.group({
      categoryID: [''],
      categoryName: ['', Validators.required],
      action: ['insert']
    });
  }

  listAllCategories() {
    this.ac.getAllCategories().subscribe((res) => {
      this.categoriesList = res;
    });
  }

  addCategory() {
    const dt = new Date();
    // tslint:disable-next-line: max-line-length
    const qID =
    dt.getDate() +
    '-' + (dt.getMonth() + 1) +
    '-' + dt.getFullYear() +
    '-' + dt.getHours() +
    '' + dt.getMinutes() +
    '' + dt.getSeconds();

    this.categoryForm.patchValue({
      categoryID: qID
    });


    this.ac.insertCategory(this.categoryForm.value).subscribe((response) => {
      if (response.res) {
        this.listAllCategories();
      }
    });

  }

}

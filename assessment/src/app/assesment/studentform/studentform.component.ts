import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private cService: CommonService) { }

  studentForm: FormGroup;
  isSubmitted  =  false;

  qualification = [
    {label: 'BCA', value: 'BCA'},
    {label: 'MCA', value: 'MCA'},
    {label: 'Other', value: 'Other'},
  ];

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact1: ['', Validators.required],
      contact2: [''],
      address: ['', Validators.required],
      qualificationID: ['', Validators.required],
      specialzation: [''],
      agree: ['', Validators.required],
      yearofpassing: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.studentForm.valid) {
      this.cService.addStudent(this.studentForm.value).subscribe(res => {
        console.log(res);
      });
    }
  }

}

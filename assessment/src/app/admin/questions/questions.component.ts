import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  addQuizForm: FormGroup;
  topicID;
  correctOptions = [];
  isImg = '';
  isAudio = '';
  isString = 'true';
  imgPath = '';
  audioPath = '';

  constructor(private urlParam: ActivatedRoute, private fb: FormBuilder, private aq: CommonService) { }

  ngOnInit() {
    this.addQuizForm = this.fb.group({
      question: ['', Validators.required],
      options: this.fb.array([])
    });

    this.urlParam.params.subscribe((param: Params) => {
      this.topicID = param.id;
      console.log(this.topicID);
    });
  }

  get allOptions() {
    return this.addQuizForm.get('options') as FormArray;
  }

  addOptions() {
    this.allOptions.push(this.fb.control('', Validators.required));
  }

  removeOptions(i) {
    this.allOptions.removeAt(i);
  }

  addQuestion() {
    this.correctOptions = [];
    document.querySelectorAll('.form-check-input:checked').forEach((i) => {
      this.correctOptions.push((i as HTMLInputElement).value);
    });

    if (this.addQuizForm.valid) {
      const data = {
        qID: '',
        topicID: '',
        isImg: '',
        isAudio: '',
        isString: 'true',
        imgPath: '',
        audioPath: '',
        question: '',
        correctOptions: []
      };
      const questions = JSON.stringify(this.addQuizForm.value);
      const correctOptions = this.correctOptions.toString();
      const dt = new Date();
      const qID =
      dt.getDate() +
      '-' + (dt.getMonth() + 1) +
      '-' + dt.getFullYear() +
      '-' + dt.getHours() +
      '' + dt.getMinutes() +
      '' + dt.getSeconds() +
      '' + dt.getMilliseconds();

      data.qID = qID;
      data.topicID = this.topicID;
      data.isImg = this.isImg;
      data.isAudio = this.isAudio;
      data.isString = this.isString;
      data.imgPath = this.imgPath;
      data.audioPath = this.audioPath;
      data.question = questions;
      data.correctOptions.push(correctOptions);

      this.aq.addQuestions(data).subscribe(res => {
        console.log(res);
        // while (this.addQuizForm.value.options.length !== 0) {
        //   const alloptions = this.addQuizForm.get('options');
        //   (<FormArray>alloptions).removeAt(0);
        // }
        this.addQuizForm.reset();
        location.reload();
      });
    }
  }

}

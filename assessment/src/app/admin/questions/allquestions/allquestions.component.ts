import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-allquestions',
  templateUrl: './allquestions.component.html',
  styleUrls: ['./allquestions.component.css']
})
export class AllquestionsComponent implements OnInit {

  quizValues: any = [];

  constructor(private urlParam: ActivatedRoute, private aq: CommonService) { }

  ngOnInit() {
    const data = {
      topicID: '',
    };
    this.urlParam.params.subscribe((param: Params) => {
      data.topicID = param.topicID;
      this.aq.getAllQuestions(data).subscribe((res) => {
        const arr = [];
        res.forEach((eq, i) => {
          const altereddata = {
            qID: '',
            question: {
              correctAns: ''
            }
          };
          altereddata.qID = eq.qID;
          altereddata.question = JSON.parse(eq.question);
          altereddata.question.correctAns = res[i].correctOptions.split(',');
          console.log(JSON.parse(eq.question));
          arr.push(altereddata);
        });
        this.quizValues = arr;
        console.log(this.quizValues);
      });
    });
  }

}

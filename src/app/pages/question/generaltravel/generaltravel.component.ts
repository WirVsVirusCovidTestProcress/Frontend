import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-generaltravel',
  templateUrl: './generaltravel.component.html',
  styleUrls: ['./generaltravel.component.scss'],
})
export class GeneraltravelComponent implements OnInit {
  generaltravel: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('generaltravel', this.generaltravel);
    this.router.navigateByUrl('/questions/factor-work', { replaceUrl: true });
  }
}
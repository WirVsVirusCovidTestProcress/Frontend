import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-diarrhea',
  templateUrl: './diarrhea.component.html',
  styleUrls: ['./diarrhea.component.scss'],
})
export class DiarrheaComponent implements OnInit {
  diarrhea: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('diarrhea', this.diarrhea);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
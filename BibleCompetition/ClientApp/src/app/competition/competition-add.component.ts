import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Competition } from './competition.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competition-add',
  templateUrl: './competition-add.component.html'
})
export class CompetitionAddComponent {

  public competition: Competition = <Competition>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveCompetition() {
    this.http.post(this.baseUrl + 'api/Competitions', this.competition).subscribe(result => {
      this.router.navigateByUrl("/competitions");
    }, error => console.error(error))
  }
}

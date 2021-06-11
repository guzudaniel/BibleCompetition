import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Competition } from './competition.models';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html'
})
export class CompetitionsComponent {
  public competitions: Competition[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadCompetitions();
  }

  public deleteCompetition(competition: Competition) {
    this.http.delete(this.baseUrl + 'api/competitions/' + competition.id).subscribe(result => {
      this.loadCompetitions();
    }, error => console.error(error))
  }

  loadCompetitions() {
    this.http.get<Competition[]>(this.baseUrl + 'api/competitions').subscribe(result => {
      this.competitions = result;
    }, error => console.error(error));
  }
}

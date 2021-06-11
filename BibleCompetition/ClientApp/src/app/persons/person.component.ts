import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person.models';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonsComponent {
  public persons: Person[];

  public currentParticipants = 0;
  public currentCorrectors = 0;
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadPersons();
  }

  public deletePerson(person: Person) {
    this.http.delete(this.baseUrl + 'api/person/' + person.id).subscribe(result => {
      this.loadPersons();
    }, error => console.error(error))
  }

  loadPersons() {
    this.http.get<Person[]>(this.baseUrl + 'api/person').subscribe(result => {
      this.persons = result;
      this.currentParticipants = 0;
      this.currentCorrectors = 0;
      for (let i = 0; i <= this.persons.length; i++)
        if (this.persons[i].role == "corector")
          this.currentCorrectors++;
        else
          if (this.persons[i].role == "participant")
            this.currentParticipants++;
    }, error => console.error(error));
  }
}

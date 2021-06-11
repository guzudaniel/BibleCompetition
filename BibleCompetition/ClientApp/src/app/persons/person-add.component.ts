import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html'
})
export class PersonAddComponent {

  public person: Person = <Person>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public savePerson() {
    this.http.post(this.baseUrl + 'api/person', this.person).subscribe(result => {
      this.router.navigateByUrl("/persons");
    }, error => console.error(error))
  }
}

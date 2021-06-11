import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CompetitionsComponent } from './competition/competition.component';
import { CompetitionAddComponent } from './competition/competition-add.component';
import { PersonsComponent } from './persons/person.component';
import { PersonAddComponent } from './persons/person-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CompetitionsComponent,
    CompetitionAddComponent,
    PersonsComponent,
    PersonAddComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'competitions', component: CompetitionsComponent },
      { path: 'competition-add', component: CompetitionAddComponent },
      { path: 'persons', component: PersonsComponent },
      { path: 'person-add', component: PersonAddComponent },
    ], { relativeLinkResolution: 'legacy' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

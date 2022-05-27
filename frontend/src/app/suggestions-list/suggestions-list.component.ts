import { Component, OnInit } from '@angular/core';
import { AppFacade } from '../app-facade';
import { userModel } from 'src/models/user-model';
import { suggestionModel } from 'src/models/suggestion-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-suggestions-list',
  templateUrl: './suggestions-list.component.html',
  styleUrls: ['./suggestions-list.component.css'],
})
export class SuggestionsListComponent implements OnInit {
  constructor(private readonly appFacade: AppFacade) {}

  users: Observable<userModel[]> | undefined;
  allSuggestions = [];

  ngOnInit(): void {
    const allUsers = this.appFacade.getAllUsers();
    allUsers.subscribe((data) => {
      console.log(data);
    });
  }
}

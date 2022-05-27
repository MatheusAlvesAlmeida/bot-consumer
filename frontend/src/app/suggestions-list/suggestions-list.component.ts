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
  users: userModel[] = [];
  allSuggestions: suggestionModel[] = [];

  constructor(private readonly appFacade: AppFacade) {
    const allUsers = this.appFacade.getAllUsers();
    allUsers.subscribe((data) => {
      data.forEach((element) => {
        if (element) {
          this.users.push(element);
          const userSuggestions = this.appFacade.getSuggestionsByUserPhone(
            element.telefone
          );
          userSuggestions.subscribe((data) => {
            data.forEach((element) => {
              this.allSuggestions.push(element);
            });
          });
        }
      });
    });
  }

  ngOnInit(): void {}
}

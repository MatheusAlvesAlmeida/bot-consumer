import { Injectable } from '@angular/core';
import { SuggestionAPI } from 'src/api/suggestions-api';
import { UsersAPI } from 'src/api/users-api';

@Injectable()
export class AppFacade {
  public constructor(
    private readonly suggestionApi: SuggestionAPI,
    private readonly usersApi: UsersAPI
  ) {}

  public getAllUsers() {
    return this.usersApi.getAllUsers();
  }

  public getSuggestionsByUserPhone(phone: string) {
    return this.suggestionApi.getSuggestionByPhone(phone);
  }

  public deleteSuggestionByID(id: number) {
    return this.suggestionApi.deleteSuggestion(id);
  }
}

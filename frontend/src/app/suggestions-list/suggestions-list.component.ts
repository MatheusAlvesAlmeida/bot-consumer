import { Component, OnInit } from '@angular/core';
import { AppFacade } from '../app-facade';
import { userModel } from 'src/models/user-model';
import { suggestionModel } from 'src/models/suggestion-model';

@Component({
  selector: 'app-suggestions-list',
  templateUrl: './suggestions-list.component.html',
  styleUrls: ['./suggestions-list.component.css'],
})
export class SuggestionsListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

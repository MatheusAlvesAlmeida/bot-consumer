import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SuggestionsListComponent } from './suggestions-list/suggestions-list.component';
import { AppFacade } from './app-facade';
import { SuggestionAPI } from 'src/api/suggestions-api';
import { UsersAPI } from 'src/api/users-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, SuggestionsListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [AppFacade, SuggestionAPI, UsersAPI],
  bootstrap: [AppComponent],
})
export class AppModule {}

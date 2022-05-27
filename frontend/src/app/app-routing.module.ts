import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsListComponent } from './suggestions-list/suggestions-list.component';

const routes: Routes = [
  { path: 'sugestoes', component: SuggestionsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

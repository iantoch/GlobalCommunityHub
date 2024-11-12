import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { ChatComponent } from './components/chat/chat.component';
import { CountryBrowserComponent } from './components/country-browser/country-browser.component';

export const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'user-list', component: UserListComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'country', component: CountryBrowserComponent },
  { path: '**', redirectTo: '/user-list' },
];

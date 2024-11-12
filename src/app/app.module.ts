import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { CountryBrowserComponent } from './components/country-browser/country-browser.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { createApollo, GraphQLModule } from './graphql.module';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

export function createApolloClient(httpLink: any): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri: 'https://countries.trevorblades.com/' }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserProfileComponent,
    ChatComponent,
    CountryBrowserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ApolloModule,
    RouterModule.forRoot(routes),
    GraphQLModule,
  ],
  providers: [
    importProvidersFrom(BrowserModule, FormsModule),
    provideHttpClient(),
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApolloClient,
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

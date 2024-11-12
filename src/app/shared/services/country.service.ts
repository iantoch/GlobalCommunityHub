import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';

@Injectable({ providedIn: 'root' })
export class CountryService {
  constructor(private apollo: Apollo) {}

  getCountry(id: string): Observable<ApolloQueryResult<any>> {
    if (!id) {
      throw new Error('ID is required');
    }
    return this.apollo.query({
      query: gql`
        query GetCountry($id: ID!) {
          country(code: $id) {
            name
            capital
            currency
            continent {
              name
            }
          }
        }
      `,
      variables: { id },
    });
  }
}

import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS, USER_DETAILS } from './fragments';

export const ALL_REPOSITORIES_ORDERED_SEARCH = gql`
  query repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String, $first: Int, $after: String) {
    repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword, first: $first, after: $after) {
      edges {
        node {
          ...RepositoryDetails
        }
        cursor
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
${REPOSITORY_DETAILS}
`;

export const FIND_REPOSITORY = gql`
  query repository($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      ...RepositoryDetails
      reviews(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
          startCursor
        }
        edges {
          cursor
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const CURRENT_USER = gql`
  query {
    me {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;
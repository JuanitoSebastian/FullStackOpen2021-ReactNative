import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS, USER_DETAILS, REPOSITORY_AND_REVIEW_DETAILS } from './fragments';

export const ALL_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const FIND_REPOSITORY = gql`
  query repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryAndReviewDetails
    }
  }
  ${REPOSITORY_AND_REVIEW_DETAILS}
`;

export const CURRENT_USER = gql`
  query {
    me {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;
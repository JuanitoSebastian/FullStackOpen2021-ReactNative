import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    fullName
    description
    language
    forksCount
    watchersCount
    stargazersCount
    reviewCount
    ratingAverage
    ownerAvatarUrl
    url
  }
`;

export const REPOSITORY_AND_REVIEW_DETAILS = gql`
  fragment RepositoryAndReviewDetails on Repository {
    ...RepositoryDetails
    reviews {
      edges {
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
  ${REPOSITORY_DETAILS}
`;

export const USER_DETAILS = gql`
  fragment UserDetails on User {
    id
    username
  }
`;
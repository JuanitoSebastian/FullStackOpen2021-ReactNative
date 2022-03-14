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

export const USER_DETAILS = gql`
  fragment UserDetails on User {
    id
    username
  }
`;
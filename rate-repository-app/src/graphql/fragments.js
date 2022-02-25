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
  }
`;

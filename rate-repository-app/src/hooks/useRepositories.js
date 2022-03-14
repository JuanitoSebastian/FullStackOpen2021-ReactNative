import { useLazyQuery } from '@apollo/client';
import { ALL_REPOSITORIES_ORDERED_SEARCH } from '../graphql/queries';

const useRepositories = () => {
  const [loadRepositories, { data, loading, fetchMore, ...result }] = useLazyQuery(ALL_REPOSITORIES_ORDERED_SEARCH, {
    fetchPolicy: 'cache-and-network'
  });

  const fetchRepositories = async (orderBy = 'CREATED_AT', orderDirection = "DESC", searchKeyword = undefined) => {
    const response = await loadRepositories({ variables: { orderBy, orderDirection, searchKeyword }});
    return response;
  };

  return fetchRepositories;
};

export default useRepositories;
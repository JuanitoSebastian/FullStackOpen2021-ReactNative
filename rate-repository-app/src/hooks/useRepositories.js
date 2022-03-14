import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES_ORDERED_SEARCH } from '../graphql/queries';

const useRepositories = (orderBy = 'CREATED_AT', orderDirection = "DESC", searchKeyword = undefined, first = 8) => {
  const { data, loading, fetchMore, ...result } = useQuery(ALL_REPOSITORIES_ORDERED_SEARCH, {
    variables: { orderBy, orderDirection, searchKeyword, first },
    fetchPolicy: 'cache-and-network'
  });
  
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy, 
        orderDirection, 
        searchKeyword, 
        first
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
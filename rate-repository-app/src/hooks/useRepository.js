import { useQuery } from '@apollo/client';
import { FIND_REPOSITORY } from '../graphql/queries';

const useRepository = (id, first = 2) => {
  const { data, loading, fetchMore, ...result } = useQuery(FIND_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { repositoryId: id, first }
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        repositoryId: id,
        after: data.repository.reviews.pageInfo.endCursor,
        first
      },
    });
  };

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepository;
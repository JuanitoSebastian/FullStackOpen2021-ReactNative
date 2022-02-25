import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const queryResult = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  return queryResult;
};

export default useRepositories;
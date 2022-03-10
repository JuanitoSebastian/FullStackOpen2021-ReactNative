import { useLazyQuery } from '@apollo/client';
import { FIND_REPOSITORY } from '../graphql/queries';

const useRepository = () => {
  const [loadRepository] = useLazyQuery(FIND_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
  });

  const fetchRepository = async (id) => {
    const response = await loadRepository({ variables: { repositoryId: id } });
    return response;
  };

  return fetchRepository;
};

export default useRepository;
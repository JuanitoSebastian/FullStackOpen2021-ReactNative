import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../graphql/queries';

const useCurrentUser = () => {
  const queryResult = useQuery(CURRENT_USER, {
    fetchPolicy: 'network-only'
  });
  return queryResult;
};

export default useCurrentUser;
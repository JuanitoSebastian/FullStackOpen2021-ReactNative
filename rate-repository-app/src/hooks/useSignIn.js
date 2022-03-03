import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async (credentials) => {
    const response = await mutate({ variables: { credentials } } );
    const token = response.data.authenticate.accessToken;
    await authStorage.setAccessToken(token);
    apolloClient.resetStore();
    return response;
  };

  return [signIn, result];
};

export default useSignIn;
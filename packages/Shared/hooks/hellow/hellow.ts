import { useQuery } from '@apollo/client';
import { HELLO } from '../../graphql/query/auth';

export const useHelloWorld = () => {
  const { data, error, loading, subscribeToMore } = useQuery(HELLO, {
    variables: {},
    fetchPolicy: 'cache-and-network',
  });
  return { data, error, loading };
};

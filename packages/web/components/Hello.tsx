import { useHelloWorld } from '@frontend/shared/hooks/hellow/hellow';

export const Hello = () => {
  const { data, loading, error } = useHelloWorld();
  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
};

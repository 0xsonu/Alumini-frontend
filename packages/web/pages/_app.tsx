import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { client } from '@frontend/shared/graphql';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { store } from '@frontend/shared/redux';
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default function MyApp(props: AppProps) {
  return (
    // <Provider store={store}>
      <App {...props} />
    // </Provider>
  );
}

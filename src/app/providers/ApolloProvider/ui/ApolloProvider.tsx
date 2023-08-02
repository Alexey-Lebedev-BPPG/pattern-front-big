import { ReactNode } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client';

export interface StoreProviderProps {
  children?: ReactNode;
}

export const client = new ApolloClient({
  uri: process.env.APOLLO_CLIENT,
  cache: new InMemoryCache(),
});

export const ApolloProvider = (props: StoreProviderProps) => {
  const { children } = props;

  return <Provider client={client}>{children}</Provider>;
};

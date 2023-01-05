import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/RootStack';
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  uri: 'http://localhost:5001/api/undercooked-greyhound',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
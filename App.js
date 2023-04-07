import { View, Text } from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri:'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
})


const App = () => {
  return (
    <ApolloProvider client={client} >
   <Navigation/>
  
    </ApolloProvider>
  )
}

export default App
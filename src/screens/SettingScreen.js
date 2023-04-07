import { View, Text,FlatList, Pressable } from 'react-native'
import React from 'react'
import { CONTINENT_QUERY } from '../gql/Query'
import { useQuery } from '@apollo/client'


const SettingScreen = () => {

  const { data, loading } = useQuery(CONTINENT_QUERY); //execute query

  const ContinentItem = ({ continent }) => {
    const { name, code } = continent; //get the name of continent

    return (
      <Pressable>
        <Text>{name} : {code}</Text> 
      </Pressable>
    );
  };

  if (loading) {
    return <Text>Fetching data...</Text> //while loading return this
  }

  return (
      <FlatList
        data={data.continents}
        renderItem={({ item }) => <ContinentItem continent={item} />}
        keyExtractor={(item, index) => index}
      />
  );
}

export default SettingScreen;
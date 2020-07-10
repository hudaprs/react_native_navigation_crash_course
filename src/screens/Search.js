import React from 'react';
import {Text, Button} from 'react-native';

import ScreenContainer from '../screens/ScreenContainer';

const Search = ({navigation}) => {
  return (
    <ScreenContainer>
      <Text>Search Screen</Text>
      <Button title="Search 2" onPress={() => navigation.navigate('Search2')} />
      <Button
        title="React Native School"
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Details',
            params: {
              name: 'React Native School',
            },
          })
        }
      />
    </ScreenContainer>
  );
};

export default Search;

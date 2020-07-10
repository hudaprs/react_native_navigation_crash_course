import React from 'react';
import {Text, Button} from 'react-native';

import ScreenContainer from './ScreenContainer';

const Home = ({navigation}) => {
  return (
    <ScreenContainer>
      <Text>Master Screen</Text>
      <Button
        title="React Native By Example"
        onPress={() =>
          navigation.navigate('Details', {name: 'React Native by example'})
        }
      />
      <Button
        title="React Native School"
        onPress={() =>
          navigation.navigate('Details', {name: 'React Native School'})
        }
      />
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
    </ScreenContainer>
  );
};

export default Home;

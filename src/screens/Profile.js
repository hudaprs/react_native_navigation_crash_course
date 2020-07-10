import React from 'react';
import {Button, Text} from 'react-native';

import ScreenContainer from './ScreenContainer';

const Profile = ({navigation}) => {
  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="SignOut" onPress={() => alert('Sign out')} />
    </ScreenContainer>
  );
};

export default Profile;

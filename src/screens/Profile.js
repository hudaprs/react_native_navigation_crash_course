import React, {useContext} from 'react';
import {Button, Text} from 'react-native';

import ScreenContainer from './ScreenContainer';
import {AuthContext} from '../context';

const Profile = ({navigation}) => {
  const {logout} = useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="SignOut" onPress={logout} />
    </ScreenContainer>
  );
};

export default Profile;

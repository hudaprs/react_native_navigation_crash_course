import React from 'react';
import {Button} from 'react-native';

import ScreenContainer from './ScreenContainer';

const Profile = ({navigation}) => {
  return (
    <ScreenContainer>
      <Button
        title="Go to home screen"
        onPress={() => alert('Will go to home screen')}
      />
    </ScreenContainer>
  );
};

export default Profile;

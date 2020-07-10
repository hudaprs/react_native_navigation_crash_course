import React from 'react';
import {Button} from 'react-native';

import ScreenContainer from './ScreenContainer';

const Login = ({navigation}) => {
  return (
    <ScreenContainer>
      <Button
        title="Go to register screen"
        onPress={() => navigation.navigate('Register')}
      />
    </ScreenContainer>
  );
};

export default Login;

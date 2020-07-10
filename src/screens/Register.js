import React from 'react';
import {Button} from 'react-native';
import ScreenContainer from './ScreenContainer';

const Register = ({navigation}) => {
  return (
    <ScreenContainer>
      <Button
        title="Go to login screen"
        onPress={() => navigation.navigate('Login')}
      />
    </ScreenContainer>
  );
};

export default Register;

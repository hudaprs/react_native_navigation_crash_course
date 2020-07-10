import React, {useContext} from 'react';
import {Button, Text} from 'react-native';

import ScreenContainer from './ScreenContainer';
import {AuthContext} from '../context';

const Login = ({navigation}) => {
  const {login} = useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={login} />
      <Button
        title="Register Screen"
        onPress={() => navigation.navigate('Register')}
      />
    </ScreenContainer>
  );
};

export default Login;

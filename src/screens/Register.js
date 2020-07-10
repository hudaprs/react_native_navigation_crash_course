import React, {useContext} from 'react';
import {Button, Text} from 'react-native';
import ScreenContainer from './ScreenContainer';

import {AuthContext} from '../context';

const Register = ({navigation}) => {
  const {register} = useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Register Screen</Text>
      <Button title="Register" onPress={register} />
      <Button
        title="Login Screen"
        onPress={() => navigation.navigate('Login')}
      />
    </ScreenContainer>
  );
};

export default Register;

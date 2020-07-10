import React from 'react';
import {Text} from 'react-native';

import ScreenContainer from '../screens/ScreenContainer';

const Details = ({route}) => {
  return (
    <ScreenContainer>
      <Text>Details Screen</Text>
      {route.params.name && <Text>{route.params.name}</Text>}
    </ScreenContainer>
  );
};

export default Details;

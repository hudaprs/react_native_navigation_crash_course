import React from 'react';
import {View, StyleSheet} from 'react-native';

const ScreenContainer = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
});

export default ScreenContainer;

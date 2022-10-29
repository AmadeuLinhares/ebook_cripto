import {NavigationContainer} from '@react-navigation/native';
import {BookRouters} from '@routes/book.routes';
import {RouterStyle} from '@routes/constants';
import React from 'react';
import {View} from 'react-native';
export const Routes = () => {
  return (
    <View style={RouterStyle}>
      <NavigationContainer>
        <BookRouters />
      </NavigationContainer>
    </View>
  );
};

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewPlaceScreen = props => {
  return (
    <View>
      <Text>NewPlaceScreen</Text>
    </View>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add place'
};

const styles = StyleSheet.create({});

export default NewPlaceScreen;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <View style={styles.main}>
        <Text style={styles.heading}>Reanimated</Text>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {fontSize: 40},
});

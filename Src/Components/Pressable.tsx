// Pressable is a core component in React Native that lets you handle and respond
// to various stages of a touch/press interaction on its children components.

import React from 'react';
import {View, Text, Pressable, StyleSheet, Alert} from 'react-native';

const PressableCom: React.FC = () => {
  const handlePress = () => Alert.alert('Pressed!');
  const handleLongPress = () => Alert.alert('Long Pressed!');
  const handlePressIn = () => console.log('Press In');
  const handlePressOut = () => console.log('Press Out');

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress} // Triggered on tap release (after pressIn and pressOut)
        onLongPress={handleLongPress} // Triggered if press held > 500ms
        onPressIn={handlePressIn} // Triggered when finger touches down
        onPressOut={handlePressOut} // Triggered when finger lifts up
        hitSlop={10} // Expands the touch area 10px in all directions
        pressRetentionOffset={10} // Allows finger to move 10px while still registering the press
        style={({pressed}) => [
          styles.button,

          {backgroundColor: pressed ? '#ddd' : '#2196F3'},
        ]}>
        <Text style={styles.text}>I'm Pressable!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 12,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default PressableCom;

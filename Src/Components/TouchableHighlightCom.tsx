// TouchableHighlight is a component in React Native that is used to detect touch interactions and provide 
// visual feedback when the user presses the component, typically by highlighting the element's background color.


import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet,Alert } from 'react-native';

const TouchableHighlightCom = () => {
  const [clicked, setClicked] = useState(false);

  const handlePress = () => {
    setClicked(!clicked);
  };

  const handleLongPress = () => {
    Alert.alert('Long press detected!');
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.button, clicked && styles.clickedButton]}
        onPress={handlePress}               // ✅ Triggered on tap
        onLongPress={handleLongPress}       // ✅ Triggered on long press
        underlayColor="#DDDDDD"             // ✅ Color when pressed
        activeOpacity={0.8}                 // ✅ Opacity while underlay is shown
        disabled={false}                    // ✅ Disable the button if true
      >
        <Text style={styles.text}>Tap or Hold Me!</Text>
      </TouchableHighlight>

      <Text style={styles.output}>
        {clicked ? 'Button Pressed' : 'Press the Button'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  clickedButton: {
    backgroundColor: '#3700B3',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  output: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default TouchableHighlightCom;

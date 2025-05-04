// TouchableOpacity is a core component used to wrap any view or text to make it respond to touch interactions.
//  It provides visual feedback by reducing the opacity of the wrapped element when pressed.

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const TouchableOpacityCom = () => {
  const [clicked, setClicked] = useState(false);

  const handlePress = () => {
    setClicked(!clicked);
  };

  const handleOnLongPress=()=>Alert.alert("Long Pressed!")
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, clicked && styles.clickedButton]}
        onPress={handlePress}             // ✅ Called when pressed
        onLongPress={handleOnLongPress} // ✅ Optional long press
        activeOpacity={0.6}               // ✅ Opacity during press
        disabled={false}                  // ✅ Disables the button if true
      >
        <Text style={styles.text}>Touch Me!</Text>
      </TouchableOpacity>

      <Text style={styles.output}>
        {clicked ? 'You pressed the button!' : 'Press the button above'}
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
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 10,
  },
  clickedButton: {
    backgroundColor: '#1565C0',
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

export default TouchableOpacityCom;

// TouchableWithoutFeedback is a touchable wrapper that detects touch events but provides no visual feedback (no opacity change, no highlight).
//  It’s commonly used to dismiss the keyboard or wrap UI elements where touch needs to be handled silently.

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Alert,
} from 'react-native';

const TouchableWithoutFeedbackCom = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const handleButtonPress = () => {
    // This will dismiss the keyboard when the user taps anywhere on the screen
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}             // ✅ Dismiss the keyboard when tapping anywhere on the screen
      onLongPress={() => Alert.alert("Long Pressed")}// ✅ Function called when the view is long pressed (optional)
      disabled={false}                      // ✅ Disables press handling if true
      accessible={false}                    // ✅ Makes it accessible for screen readers (default: true)
      accessibilityLabel="Dismiss Keyboard" // ✅ Label for screen readers
      touchSoundDisabled={false}            // ✅ Disables touch sound on Android when true (Android-only prop)
      delayPressIn={100}                    // ✅ Delay (in ms) before onPressIn is triggered
      hitSlop={{ top: 10, bottom: 10 }}     // ✅ Increases the touchable area around the element
      pressRetentionOffset={{ top: 20, left: 20, right: 20, bottom: 20 }} // ✅ Defines the threshold for press move
    >
      <View style={styles.container}>
        {/* Text Input field */}
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={handleInputChange}
          placeholder="Type something"
        />

        {/* A button-like text */}
        <Text style={styles.buttonText} onPress={handleButtonPress}>
          Tap anywhere to dismiss the keyboard
        </Text>

        {/* Display the entered input */}
        <Text style={styles.output}>
          {inputValue ? `You typed: ${inputValue}` : 'No text entered yet'}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonText: {
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 10,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  output: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TouchableWithoutFeedbackCom;

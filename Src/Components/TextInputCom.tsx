// TextInput is a core component used to accept user input
//  in the form of text, numbers, or passwords in React Native apps.

import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextInputCom = () => {
  const [text, setText] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={setText}
        keyboardType="default"      // ✅ e.g., 'numeric', 'email-address'
        secureTextEntry={false}     // ✅ true for password fields
        maxLength={30}              // ✅ limits number of characters
        autoFocus={true}            // ✅ focuses input on mount
        multiline                   // ✅ Allows multiple lines of input
      />
      <Text style={styles.output}>You typed: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    borderRadius: 5,
    marginBottom: 12,
  },
  output: {
    fontSize: 16,
    color: 'green',
  },
});

export default TextInputCom;

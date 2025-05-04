// Switch is a built-in React Native component used to create on/off toggle switches,
// commonly used for settings like notifications, dark mode, etc.


import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SwitchCom = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Switch is {isEnabled ? 'ON' : 'OFF'}</Text>
      <Switch
        value={isEnabled}           // ✅ Current state
        onValueChange={toggleSwitch} // ✅ Function to toggle switch
        thumbColor={isEnabled ? '#fff' : '#fff'}  // ✅ Color of the switch circle
        trackColor={{ false: '#767577', true: '#81b0ff' }} // ✅ Background color
        ios_backgroundColor="#3e3e3e" // ✅ iOS-only background color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  }
});

export default SwitchCom;

// StatusBar is a built-in component in React Native used to control the appearance of the device's top
// status bar, which shows info like battery, time, and network.



import React from 'react';
import {View, Text, StatusBar, StyleSheet, SafeAreaView} from 'react-native';

const StatusBarCom = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#6200EE" // ✅ Android only: sets the background color of the status bar
        barStyle="default" // ✅ Both platforms: 'default', 'dark-content', 'light-content'
        hidden={false} // ✅ Hides or shows the status bar
        translucent={false} // ✅ Makes the status bar see-through (Android mainly)
        animated={false} // ✅ Animates style changes (like hidden/show)
        networkActivityIndicatorVisible={true} // ✅ iOS only: shows loading spinner on status bar (deprecated in newer iOS)
      />
      <View style={styles.container}>
        <Text style={styles.text}>StatusBar Example</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: '#6200EE',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 20,
  },
});

export default StatusBarCom;

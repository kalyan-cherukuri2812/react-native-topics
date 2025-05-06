/**
 * AppState is a React Native API that helps you track the current state of the app — 
 * like whether it's in the foreground, background, or inactive.
 *
 * It’s useful when:
 * ✅ You want to pause a video or timer when the app is in the background.
 * ✅ You need to refresh data when the app comes back to the foreground.
 * ✅ You want to save user progress if they leave the app.
 */


import React, { useEffect, useState } from 'react';
import { View, Text, AppState, AppStateStatus, StyleSheet } from 'react-native';

const AppStateExample = () => {
  const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState); // ✅ Get initial app state

  useEffect(() => {
    // ✅ Subscribe to app state changes
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      console.log('App State changed to:', nextAppState);
      setAppState(nextAppState); // ✅ Update app state when it changes
    });

    return () => {
      subscription.remove(); // ✅ Clean up listener on unmount
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current App State: {appState}</Text>

      {/* ✅ Possible App States: 
          - 'active': App is running in the foreground
          - 'background': App is in the background
          - 'inactive': App is transitioning (iOS only)
      */}
    </View>
  );
};

export default AppStateExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white"
  },
  text: {
    fontSize: 18,
  },
});

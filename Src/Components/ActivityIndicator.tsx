// ActivityIndicator is a built-in React Native component that displays a spinning loader on the screen to indicate that something is in progress — such as fetching data from an API, waiting for user authentication, or uploading files. It helps users understand that the app is working and hasn't frozen, improving the overall user experience.

import React, {useState} from 'react';
import {View, Text, ActivityIndicator, Button, StyleSheet} from 'react-native';

const ActivityIndicatorComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <View style={styles.container}>
      <Button
        title={isLoading ? 'Stop Loading' : 'Start Loading'}
        onPress={toggleLoading}
      />

      <ActivityIndicator
        animating={isLoading} // Show or hide the spinner
        size="large" // "small" | "large" | number (e.g., 40)
        color="#ff6347" // Spinner color (tomato)
        hidesWhenStopped={true} // Hides spinner when not animating
        style={styles.loader}
      />

      <Text>{isLoading ? 'Loading...' : 'Not loading'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    marginVertical: 20,
  },
});

export default ActivityIndicatorComponent;

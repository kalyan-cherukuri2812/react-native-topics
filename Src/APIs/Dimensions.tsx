/**
 * Dimensions is a React Native API that provides the width and height of the device’s screen or window.
 *
 * It’s useful when:
 * ✅ You want to create responsive layouts that adapt to different screen sizes.
 * ✅ You need to adjust component sizes dynamically based on device dimensions.
 * ✅ You want to handle orientation changes (portrait/landscape).
 */

import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const DimensionsPropsExample = () => {
  // ✅ Get the window dimensions (the visible area of the app)
  const window = Dimensions.get('window');

  // ✅ Get the screen dimensions (the entire device screen size)
  const screen = Dimensions.get('screen');

  return (
    <View style={styles.container}>
      {/* Display window dimensions */}
      <Text style={styles.heading}>Window Dimensions:</Text>
      <Text style={styles.text}>Width: {window.width}px</Text>
      <Text style={styles.text}>Height: {window.height}px</Text>
      <Text style={styles.text}>Scale (pixel density): {window.scale}</Text>
      <Text style={styles.text}>Font Scale: {window.fontScale}</Text>

      <View style={styles.separator} />

      {/* Display screen dimensions */}
      <Text style={styles.heading}>Screen Dimensions:</Text>
      <Text style={styles.text}>Width: {screen.width}px</Text>
      <Text style={styles.text}>Height: {screen.height}px</Text>
      <Text style={styles.text}>Scale (pixel density): {screen.scale}</Text>
      <Text style={styles.text}>Font Scale: {screen.fontScale}</Text>
    </View>
  );
};

export default DimensionsPropsExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 3,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
    backgroundColor: '#ccc',
  },
});

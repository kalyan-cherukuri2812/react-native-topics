// ImageBackground is a core React Native component that allows you to display an image as the background
//  of a view, while still rendering other child components (like text or buttons) on top of it.

// It behaves like a regular View but with a background image.



import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const ImageBackgroundCom: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        // Use one of the two image sources below:

        // 👉 Local image (uncomment this if you have `bg.jpg` in your assets folder)
        // source={require('./assets/bg.jpg')}

        // 👉 Remote image
        source={{ uri: 'https://reactjs.org/logo-og.png' }}

        style={styles.background}
        resizeMode="cover" // cover | contain | stretch | center | repeat
      >
        <Text style={styles.text}>Hello on Image Background!</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 5,
  },
});

export default ImageBackgroundCom;

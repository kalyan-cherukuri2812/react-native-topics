// The Image component in React Native is used to display images (either local or remote) within your app.
//  It is a powerful and flexible component, allowing for custom styling, resizing, 
//  and performance optimizations for handling images.




import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageCom: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Local Image */}
      {/* <Image
        source={require('./assets/sample.jpg')}
        style={styles.image}
      /> */}

      {/* Remote Image */}
      <Image
        source={{ uri: 'https://reactjs.org/logo-og.png' }}
        style={styles.image}
        resizeMode="cover" // control how the image scales
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default ImageCom;

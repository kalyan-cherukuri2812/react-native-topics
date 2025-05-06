// The Appearance API lets you detect the system color scheme 
// — light mode or dark mode — so your app can automatically adjust its theme.

// It works on both iOS and Android.


import React, { useEffect, useState } from 'react';
import { Appearance, View, Text, StyleSheet } from 'react-native';

const AppearanceExample = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });

    return () => listener.remove(); // Clean up on unmount
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === 'dark' ? '#000' : '#fff' },
      ]}
    >
      <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>
        Current theme: {theme}
      </Text>
    </View>
  );
};

export default AppearanceExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

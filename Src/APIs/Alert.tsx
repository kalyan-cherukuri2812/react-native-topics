// Alert is used to show a pop-up message to the user with a title, a message, and some buttons (like OK, Cancel).
// It's useful when you want to warn, confirm, or notify something.


import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const AlertEx = () => {
  const showAlert = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel', // ✅ Makes the button look like a cancel button
        },
        {
          text: 'OK',
          onPress: () => console.log('Logged out'), // ✅ This function runs when OK is pressed
        },
      ],
      { cancelable: false } // ✅ Prevents closing alert by tapping outside
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

export default AlertEx;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

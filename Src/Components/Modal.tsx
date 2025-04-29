// A Modal is a component that is displayed on top of the main content, often used for displaying messages, 
// forms, or notifications. In React Native, we use the Modal component provided by the library to achieve this.

import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

const ModalCom: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <Button title="Show Modal" onPress={toggleModal} />
      
      <Modal
        animationType="slide" // 'none', 'slide', 'fade' animation styles for how the modal appears/disappears
        transparent={true} // Makes the background behind the modal semi-transparent
        visible={isVisible} // Controls whether the modal is visible or not
        onRequestClose={toggleModal} // Android-specific: callback when back button is pressed
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text>This is a Modal!</Text>
            <Button title="Close" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darkens the background to make the modal stand out
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default ModalCom;

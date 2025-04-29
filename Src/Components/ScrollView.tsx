// ScrollView is a container component that wraps other components and allows them to be scrollable.
// It is an important React Native component when the content exceeds the screen's size,
// enabling the user to scroll through the content.

/*
  ✅ ScrollView vs FlatList:

  1. **ScrollView**:
     - Best for **small lists** of content, where **performance** isn't a huge concern.
     - **Renders all items** at once.
     - Ideal for **non-lists** with **dynamic content**, like images, cards, and text.

  2. **FlatList**:
     - Best for **long lists** of items.
     - **Lazily renders items** as they come into view, which saves **memory** and **processing time**.
     - Built-in features like **infinite scroll**, **item separators**, and **support for multiple columns** make it the better choice for **large datasets**.

  🔹 **When to Use**:
    - **Use ScrollView** when you have a **small number of child components** that are relatively static, and you don’t mind rendering everything at once.
    - **Use FlatList** when you have a **long list of items**, especially when the content is dynamic and needs to be rendered lazily for better performance.
*/

import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet, RefreshControl} from 'react-native';

const ScrollViewCom: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  // Handle pull-to-refresh
  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request or data refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal={false} // Vertical scroll (set to true for horizontal)
      showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
      onScroll={event => console.log(event.nativeEvent.contentOffset)}
      scrollEnabled={true} // Enable scrolling
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      keyboardShouldPersistTaps="handled" // Keep keyboard visible when tapping content
      bounces={false} // Disable bounce effect
      indicatorStyle="white" // Change the scroll indicator to white
      endFillColor="#f0f0f0" // Set the end fill color for scroll view
    >
      <Text style={styles.text}>Item 1</Text>
      <Text style={styles.text}>Item 2</Text>
      <Text style={styles.text}>Item 3</Text>
      <Text style={styles.text}>Item 4</Text>
      <Text style={styles.text}>Item 5</Text>
      <Text style={styles.text}>Item 6</Text>
      <Text style={styles.text}>Item 7</Text>
      <Text style={styles.text}>Item 8</Text>
      <Text style={styles.text}>Item 9</Text>
      <Text style={styles.text}>Item 10</Text>
      <Text style={styles.text}>Item 11</Text>
      <Text style={styles.text}>Item 12</Text>
      <Text style={styles.text}>Item 13</Text>
      <Text style={styles.text}>Item 14</Text>
      <Text style={styles.text}>Item 15</Text>
      <Text style={styles.text}>Item 16</Text>
      <Text style={styles.text}>Item 17</Text>
      <Text style={styles.text}>Item 18</Text>
      <Text style={styles.text}>Item 19</Text>
      <Text style={styles.text}>Item 20</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensures content stretches if there's not enough content to fill the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    padding: 20,
  },
});

export default ScrollViewCom;

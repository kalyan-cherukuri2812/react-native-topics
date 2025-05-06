// `FlatList` is a built-in React Native component used to efficiently show a list of items.
// It works well even with large amounts of data.
// Supports both **vertical** and **horizontal** scrolling.
// You can add a **header**, **footer**, and **separator lines** between items.
// Allows **pull-to-refresh** (swipe down to reload the list).
// Supports **infinite scroll** (load more data as you reach the end).
// Can **scroll to a specific item** using index.
// Shows items in **multiple columns** using the `numColumns` prop.
// Common props you’ll use:
//   - `data`: the list of items to display.
//   - `renderItem`: how each item should be shown.
//   - `keyExtractor`: gives each item a unique key.
//   - `extraData`: tells FlatList to re-render when some external state changes.

import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function FlatListComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const users = Array.from({length: 1000}, (_, index) => ({
      id: String(index + 1),
      name: `User ${index + 1}`,
      email: `user${index + 1}@example.com`,
    }));
    setData(users);
  }, []);

  const renderItems = ({item}) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItems}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => <Text style={styles.header}>User List</Text>}
        initialNumToRender={10} // Limit initial items rendered
        // maxToRenderPerBatch={20} // Limit items rendered per batch
        // windowSize={1} // Reduce the window size
        removeClippedSubviews={true} // Improve memory efficiency by removing off-screen views
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
});

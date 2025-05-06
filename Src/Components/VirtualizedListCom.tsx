import { View, Text, VirtualizedList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function VirtualizedListCom() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const users = Array.from({ length: 1000 }, (_, index) => ({
      id: String(index + 1),
      name: `User ${index + 1}`,
      email: `user${index + 1}@example.com`,
    }));
    setData(users);
  }, []);

  const renderItems = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  const getItem = (data, index) => data[index];
  const getItemCount = (data) => data.length;

  return (
    <View style={styles.container}>
      <VirtualizedList
        data={data}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
        getItem={getItem}
        getItemCount={getItemCount}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => <Text style={styles.header}>User List</Text>}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
});

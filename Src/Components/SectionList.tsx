// SectionList is a component in React Native that is used to display a list of items grouped into sections.
//  Each section has a header (e.g., a date or category), and the items within the section can be scrolled.


import React, { useState } from 'react';
import { SectionList, Text, View, StyleSheet, RefreshControl } from 'react-native';

// Sample transaction data grouped by date
const transactionData = [
  {
    title: "2025-04-10", // Date as the section title
    data: [
      { id: '1', description: "Purchase of Laptop" },
      { id: '2', description: "Subscription to Netflix" },
    ]
  },
  {
    title: "2025-03-30",
    data: [
      { id: '3', description: "Grocery Shopping" },
      { id: '4', description: "Coffee Purchase" },
    ]
  },
  {
    title: "2025-03-25",
    data: [
      { id: '5', description: "Airline Ticket" },
    ]
  },
  {
    title: "2025-04-01",
    data: [
      { id: '6', description: "Online Course Fee" },
    ]
  }
];

const SectionListCom: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <SectionList
      sections={transactionData}
      keyExtractor={(item) => item.id} // Unique key for each transaction
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
      )}
    //   renderSectionFooter={({ section: { title } }) => (
    //     <View style={styles.sectionFooter}>
    //       <Text style={styles.sectionFooterText}>End of transactions for {title}</Text>
    //     </View>
    //   )}
      ItemSeparatorComponent={() => <View style={styles.separator} />} // Separator between items
      SectionSeparatorComponent={() => <View style={styles.sectionSeparator} />} // Section separator
      ListHeaderComponent={() => <Text style={styles.listHeader}>Transaction History</Text>} // List header
      ListFooterComponent={() => <Text style={styles.listFooter}>End of List</Text>} // List footer
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} // Pull to refresh
    />
  );
};

const styles = StyleSheet.create({
  listHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  listFooter: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  sectionHeader: {
    backgroundColor: '#e8e8e8',
    padding: 10,
  },
  sectionHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  itemContainer: {
    padding: 15,
    backgroundColor: '#fff',
  },
  itemDescription: {
    fontSize: 18,
    marginBottom: 5,
  },
  sectionFooter: {
    backgroundColor: '#e8e8e8',
    padding: 10,
  },
  sectionFooterText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
  sectionSeparator: {
    height: 10,
    backgroundColor: '#eee',
  },
});

export default SectionListCom;

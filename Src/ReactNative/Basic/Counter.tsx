import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustBtn=({title="fghj"})=>{
    return (
        <Pressable><Text>{title}</Text></Pressable>
    )
}

export default function Counter() {
  return (
    <View style={styles.container}>
      <CustBtn title='dfghj'/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

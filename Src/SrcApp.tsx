import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ActivityIndicatorComponent from './Components/ActivityIndicator'
import FlatListComponent from './Components/FlatList'

export default function SrcApp() {
  return (
    <View style={styles.bgCard}>
     {/* <ActivityIndicatorComponent/> */}
     <FlatListComponent/>
    </View>
  )
}

const styles=StyleSheet.create({
    bgCard:{
        flex:1,
    }
})
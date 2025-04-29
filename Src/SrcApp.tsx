import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ActivityIndicatorComponent from './Components/ActivityIndicator'
import FlatListComponent from './Components/FlatList'
import ModalCom from './Components/Modal'

export default function SrcApp() {
  return (
    <View style={styles.bgCard}>
     {/* <ActivityIndicatorComponent/> */}
     {/* <FlatListComponent/> */}
     <ModalCom/>
    </View>
  )
}

const styles=StyleSheet.create({
    bgCard:{
        flex:1,
    }
})
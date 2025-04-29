import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ActivityIndicatorComponent from './Components/ActivityIndicator'
import FlatListComponent from './Components/FlatList'
import ModalCom from './Components/Modal'
import PressableCom from './Components/Pressable'
import ImageBackgroundCom from './Components/ImageBackground'
import ImageCom from './Components/Image'
import ScrollViewCom from './Components/ScrollView'

export default function SrcApp() {
  return (
    <View style={styles.bgCard}>
     {/* <ActivityIndicatorComponent/> */}
     {/* <FlatListComponent/> */}
     {/* <ImageCom/> */}
     {/* <ModalCom/> */}
     {/* <PressableCom/> */}
     {/* <ImageBackgroundCom/> */}
     <ScrollViewCom/>
    </View>
  )
}

const styles=StyleSheet.create({
    bgCard:{
        flex:1,
    }
})
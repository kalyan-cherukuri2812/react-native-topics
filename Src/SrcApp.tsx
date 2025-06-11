import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ActivityIndicatorComponent from './Components/ActivityIndicator';
import FlatListComponent from './Components/FlatList';
import ModalCom from './Components/Modal';
import PressableCom from './Components/Pressable';
import ImageBackgroundCom from './Components/ImageBackground';
import ImageCom from './Components/Image';
import ScrollViewCom from './Components/ScrollView';
import SectionListCom from './Components/SectionList';
import StatusBarCom from './Components/StatusBarCom';
import SwitchCom from './Components/SwitchCom';
import TextInputCom from './Components/TextInputCom';
import TouchableHighlightCom from './Components/TouchableHighlightCom';
import TouchableOpacityCom from './Components/TouchableOpacityCom';
import TouchableWithoutFeedbackCom from './Components/TouchableWithoutFeedbackCom';
import VirtualizedListCom from './Components/VirtualizedListCom';
import AlertEx from './APIs/Alert';
import AppearanceExample from './APIs/Appearance';
import AppStateExample from './APIs/AppState';
import DimensionsPropsExample from './APIs/Dimensions';
import Navigator from './Navigations/Navigator';
import Todo from './ReactNative/Todo';

export default function SrcApp() {
  return (
    <View style={styles.bgCard}>
      <Todo/>
      {/* <ActivityIndicatorComponent/> */}
      {/* <FlatListComponent/> */}
      {/* <ImageCom/> */}
      {/* <ModalCom/> */}
      {/* <PressableCom/> */}
      {/* <ImageBackgroundCom/> */}
      {/* <ScrollViewCom/> */}
      {/* <SectionListCom/> */}
      {/* <StatusBarCom/> */}
      {/* <SwitchCom /> */}
      {/* <TextInputCom/> */}
      {/* <TouchableHighlightCom /> */}
      {/* <TouchableOpacityCom /> */}
      {/* <TouchableWithoutFeedbackCom /> */}
      {/* <VirtualizedListCom/> */}
      
      {/* APIs */}
      {/* <AlertEx/> */}
      {/* <AppearanceExample/> */}
      {/* <AppStateExample/> */}
      {/* <DimensionsPropsExample/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  bgCard: {
    flex: 1,
  },
});

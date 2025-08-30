// ================================
// Topic 2 — Navigation & UI
// ================================

// 1) Navigation in React Native — why it matters
// Mobile apps have multiple screens.
// Navigation handles:
// - Moving between screens
// - Passing data between screens
// - Stack history (back button, deep linking)
//
// Libraries comparison:
//
// | Library                          | Use Case        | Platform      | Notes |
// |---------------------------------|----------------|---------------|-------|
// | @react-navigation/native         | Most popular   | iOS/Android   | Supports Stack, Tab, Drawer, nested navigators |
// | react-native-navigation (Wix)    | High-performance | iOS/Android | More native-feeling, more setup, used in big apps |
//
// Interview one-liner:
// "I usually use React Navigation for most apps because it’s flexible,
// supports stack, tab, drawer, and nested navigation, and integrates
// well with hooks."

// ================================
// 2) Stack Navigation — push/pop screens
// Stack: like a stack of cards/screens; you push a new screen and pop back.
// Common in login flows, detail pages, forms.

import React, {useRef, useEffect} from 'react';
import {Button, Text, View, FlatList, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Swipeable} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

// HomeScreen for Stack
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {itemId: 42})}
      />
    </View>
  );
}

// DetailsScreen for Stack
function DetailsScreen({route}) {
  const {itemId} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details Screen, itemId: {itemId}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Interview tip: Explain navigation.navigate vs navigation.push
// Also explain navigation.replace for replacing current screen
// Passing params between screens.

// ================================
// 3) Tab Navigation — bottom or top tabs
// Tabs organize app sections like Home / Profile / Settings

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export function AppTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Interview tip:
// - Add icons with react-native-vector-icons or react-native-svg
// - Customize active/inactive colors
// - Hide tab using tabBarStyle: { display: 'none' }

// ================================
// 4) Drawer Navigation — side menu
// Drawer slides from left/right, used in multiple sections

const Drawer = createDrawerNavigator();

export function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

// Tip: Be ready to explain when to use Stack vs Tab vs Drawer

// ================================
// 5) Nested Navigation
// Tabs inside Stack or Stack inside Tabs
// Pass data with navigation.navigate('ScreenName', { params }) or Context/Redux

// ================================
// 6) Styling & Layout — Flexbox + Responsive Design
// Flexbox-based layout, default flexDirection: 'column'
// Responsive units: Dimensions.get('window').width/height
// Use react-native-responsive-screen for scaling

<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
  <Text>Left</Text>
  <Text>Center</Text>
  <Text>Right</Text>
</View>;

// Interview tip: Know justifyContent, alignItems, flex, row vs column

// ================================
// 7) Gesture Handling
// Use Pressable/TouchableOpacity for simple clicks
// For swipe, drag, pinch: react-native-gesture-handler + reanimated

export function SwipeCard() {
  return (
    <Swipeable renderRightActions={() => <Text>Delete</Text>}>
      <View style={{padding: 20, backgroundColor: '#eee'}}>
        <Text>Swipe Me!</Text>
      </View>
    </Swipeable>
  );
}

// ================================
// 8) Animations
// Layout Animation, Animated API, Reanimated
// Example: Fade-in animation

export function FadeIn() {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{opacity}}>
      <Text>Fade In Text</Text>
    </Animated.View>
  );
}

// Interview tip: useNativeDriver improves performance

// ================================
// 9) FlatList & SectionList UI patterns
// FlatList for large lists, SectionList for grouped items
// Optimize with keyExtractor, getItemLayout, initialNumToRender, React.memo

const Row = React.memo(({item}) => (
  <View style={{padding: 16, borderBottomWidth: 1}}>
    <Text>{item.name}</Text>
  </View>
));

// <FlatList
//   data={data}
//   renderItem={({ item }) => <Row item={item} />}
//   keyExtractor={item => item.id}
// />

// ================================
// 10) Icons & Images
// Icons: react-native-vector-icons, react-native-svg
// Images: optimize with Image props or FastImage
<Icon name="home-outline" size={24} color="blue" />;

// Interview tip: Know remote vs local images, caching, resizing

// ================================
// 11) UI best practices
// - Keep components small and reusable
// - Use StyleSheet.create to avoid inline object recreation
// - Flatten nested Views for performance
// - Test different screen sizes (SafeAreaView + flex)

// ================================
// 12) Quick interview Q&A
// Q: Stack vs Tab vs Drawer?
// A: Stack = push/pop, Tab = sections, Drawer = side menu
// Q: How to pass data between screens?
// A: route.params or global state (Context/Redux)
// Q: How to optimize FlatList?
// A: Memo row components, keyExtractor, getItemLayout, initialNumToRender
// Q: Gesture library recommendation?
// A: react-native-gesture-handler + reanimated

// ================================
// 13) Practice Tasks (UI + Navigation)
// - Build Home, Profile, Settings with Bottom Tabs
// - Add Stack navigation in Home for detail screen
// - Use Drawer for extra menu items
// - Create FlatList of 50+ items with memoized row
// - Animate card fade-in using Animated
// - Add icons to tabs and buttons

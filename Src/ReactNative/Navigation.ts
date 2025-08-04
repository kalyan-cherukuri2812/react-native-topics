// reactNativeNavigationInterviewPrep.js

/**
 * 1️⃣ Core Concept
 * ----------------
 * - Navigation lets you move between screens, pass data, and manage app flow.
 * - Common library: react-navigation
 * - Supports Stack, Tab, Drawer navigators.
 */

/**
 * 2️⃣ Navigation Types
 * --------------------
 * Stack Navigator:
 *   - Push/pop screens like stack of cards.
 *   - Example: Login → Home → Details
 * Bottom Tab Navigator:
 *   - Tabs at bottom for switching sections.
 *   - Example: Instagram, WhatsApp
 * Drawer Navigator:
 *   - Side menu for navigation.
 *   - Example: Gmail, Slack
 * Nested Navigators:
 *   - Combine multiple navigators for complex apps.
 */

/**
 * 3️⃣ Installation
 * ----------------
 * npm install @react-navigation/native
 * npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
 * npm install @react-navigation/native-stack
 */

/**
 * 4️⃣ Basic Setup Example
 * -----------------------
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Profile from './Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**
 * 5️⃣ Common Navigation Actions
 * -----------------------------
 */
navigation.navigate('Profile', {userId: 1}); // Go to screen
navigation.goBack(); // Go back
navigation.replace('Login'); // Replace current
navigation.reset({index: 0, routes: [{name: 'Home'}]}); // Reset stack

/**
 * 6️⃣ Passing & Receiving Data
 * ----------------------------
 * Send:
 * navigation.navigate('Profile', { name: 'John' });
 *
 * Receive:
 * import { useRoute } from '@react-navigation/native';
 * const { name } = useRoute().params;
 */

/**
 * 7️⃣ Nested Navigation Example
 * -----------------------------
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

<Tab.Navigator>
  <Tab.Screen name="HomeStack" component={HomeStack} />
  <Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator>;

/**
 * 8️⃣ Interview Q&A
 * -----------------
 * Q: Stack vs Tab vs Drawer?
 * A: Stack = push/pop, Tab = bottom menu, Drawer = side menu
 *
 * Q: How to pass data between screens?
 * A: navigation.navigate('Screen', {param})
 *
 * Q: What is NavigationContainer?
 * A: Root component that manages navigation state.
 *
 * Q: What is nested navigation?
 * A: Using navigators inside each other.
 *
 * Q: How to reset navigation state?
 * A: navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
 */

/**
 * 9️⃣ Bonus (Advanced)
 * --------------------
 * - Deep Linking: Open specific screens from outside app.
 * - Dynamic Navigation: Change routes based on auth state.
 * - Performance: Use useNavigation hook, avoid inline functions.
 */



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// reactNativeNavigationInterviewPrep.js

/**
 * 📌 React Native Navigation Interview Prep Guide (Table Format)
 * ==============================================================
 * Use this file for quick revision before interviews.
 */

// const navigationPrepTable = [
//   {
//     topic: "Core Concept",
//     details: "Navigation lets you move between screens, pass data, and manage app flow. Common library: react-navigation (Stack, Tab, Drawer)."
//   },
//   {
//     topic: "Navigation Types",
//     details: `
// | Type               | How it Works                        | When to Use                  |
// |--------------------|-------------------------------------|------------------------------|
// | Stack Navigator    | Push/pop screens like stack of cards| Login flow, detail pages     |
// | Bottom Tab         | Tabs at bottom for section switching| Instagram, WhatsApp          |
// | Drawer Navigator   | Side menu sliding from left         | Gmail, Slack                 |
// | Nested Navigators  | Combine multiple navigators         | Complex apps                 |
// `
//   },
//   {
//     topic: "Installation",
//     details: `
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
// npm install @react-navigation/native-stack
// `
//   },
//   {
//     topic: "Basic Setup",
//     details: `
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Profile" component={Profile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// `
//   },
//   {
//     topic: "Common Navigation Actions",
//     details: `
// navigation.navigate('Profile', { userId: 1 }); // Go to screen
// navigation.goBack(); // Go back
// navigation.replace('Login'); // Replace current
// navigation.reset({ index: 0, routes: [{ name: 'Home' }] }); // Reset stack
// `
//   },
//   {
//     topic: "Passing Data Between Screens",
//     details: `
// Send:
// navigation.navigate('Profile', { name: 'John' });

// Receive:
// import { useRoute } from '@react-navigation/native';
// const { name } = useRoute().params;
// `
//   },
//   {
//     topic: "Nested Navigation Example",
//     details: `
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

// <Tab.Navigator>
//   <Tab.Screen name="HomeStack" component={HomeStack} />
//   <Tab.Screen name="Settings" component={SettingsScreen} />
// </Tab.Navigator>
// `
//   },
//   {
//     topic: "Interview Q&A",
//     details: `
// | Question                              | Short Answer                                     |
// |---------------------------------------|--------------------------------------------------|
// | Stack vs Tab vs Drawer?               | Stack = push/pop, Tab = bottom menu, Drawer = side menu |
// | How to pass data between screens?     | navigation.navigate('Screen', {param})          |
// | What is NavigationContainer?          | Root component that manages navigation state    |
// | What is nested navigation?            | Navigators inside each other                    |
// | How to reset navigation state?        | navigation.reset({ index: 0, routes: [{ name: 'Home' }] }) |
// `
//   },
//   {
//     topic: "Advanced Topics",
//     details: `
// - Deep Linking: Open screens from outside app.
// - Dynamic Navigation: Change routes based on auth state.
// - Performance: Use useNavigation, avoid inline render functions.
// `
//   }
// ];

// // Export for reference
// module.exports = navigationPrepTable;

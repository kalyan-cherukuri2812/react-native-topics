// react_native_interview_full.js
// React Native Interview Guide - Q1..Q50 (full file)
// Comments are wrapped to <= ~60 chars per line.
// Icons added for readability. Examples are runnable code.
// Use this file inside a RN project (App.js import or similar).

import React from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Animated,
} from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

// ==================================================
// Header / usage note
// This file contains 50 Q&A entries with examples.
// Each Q is labeled and includes an icon and detail.
// You can import any sample component below for demo.
// ==================================================

// ==================================================
// 🟢 Q1. What is React Native, and how is it
//     different from ReactJS?  🔍
// Short answer: RN builds native mobile apps using JS
// and React concepts. ReactJS builds web apps.
// Differences in components, styling and rendering.
//
// Table (conceptual):
// | Feature       | ReactJS (Web)    | React Native    |
// |---------------|------------------|-----------------|
// | UI elements   | div, span, img   | View, Text, Image|
// | Styling       | CSS files        | StyleSheet (JS) |
// | Rendering     | DOM (browser)    | Native UI       |
// | Navigation    | React Router     | React Navigation|
//
// Example component:
export function Q1_Hello() {
  return (
    <View style={styles.center}>
      <Text>Q1 — Hello from React Native</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q2. What are core components of RN?  🧱
// Core components: View, Text, Image, ScrollView,
// FlatList, TextInput, Pressable/Touchable,
// ActivityIndicator, StyleSheet.
//
// Example showing View, Text, Image:
export function Q2_CoreComponents() {
  return (
    <View style={styles.card}>
      <Text style={{ fontSize: 16, marginBottom: 8 }}>
        Q2 — Core components demo
      </Text>
      <Image
        source={{ uri: 'https://placekitten.com/120/120' }}
        style={{ width: 80, height: 80 }}
      />
    </View>
  );
}

// ==================================================
// 🟢 Q3. How does styling work in RN compared to CSS? 🎨
// RN uses JS objects, camelCase props, and Flexbox.
// Units are density-independent pixels (numbers).
// No cascading; styles are local per component.
//
// CSS -> RN mapping quick table:
// | CSS property    | RN property     |
// |-----------------|-----------------|
// | background-color| backgroundColor |
// | margin-left     | marginLeft      |
// | font-size       | fontSize        |
//
// Example StyleSheet usage:
const localStyles = StyleSheet.create({
  box: { backgroundColor: '#f9f9f9', padding: 10, margin: 6 },
});
export function Q3_Styling() {
  return (
    <View style={localStyles.box}>
      <Text>Q3 — Styling example</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q4. Advantages of RN over native dev ✅
// 1) Cross-platform single codebase.
// 2) Faster dev with hot reload.
// 3) Cost savings and code reuse.
// 4) Native UI performance for many apps.
// 5) Large community & libraries.
// Example small reusable button:
export function Q4_Button({ label = 'Tap', onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 6,
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white' }}>{label}</Text>
    </Pressable>
  );
}

// ==================================================
// 🟢 Q5. What is Virtual DOM in React (context)? 🪞
// React creates an in-memory tree (virtual DOM),
// diffs it on updates, and applies minimal changes.
// In RN the concept maps to JS tree driving native UI
// updates via the bridge/JSI, reducing unnecessary work.
//
// Example: small counter showing re-render flow.
export function Q5_VirtualDom() {
  const [n, setN] = React.useState(0);
  return (
    <View style={styles.center}>
      <Text>Q5 — Virtual DOM demo: {n}</Text>
      <Pressable onPress={() => setN(n + 1)} style={{ marginTop: 8 }}>
        <Text>Increase</Text>
      </Pressable>
    </View>
  );
}

// ==================================================
// 🟢 Q6. RN architecture: JS thread, Bridge, Native 🏛️
// - JS thread runs your JS bundle and logic.
// - Bridge (old) serializes messages JSON <-> native.
// - Native thread renders UI & handles device APIs.
// New arch: JSI + Fabric (UI) + TurboModules.
// Benefit: faster calls, less serialization overhead.
//
// No example code needed for architecture concept.
// Provide a small text:
export function Q6_Architecture() {
  return (
    <View style={styles.card}>
      <Text>
        Q6 — RN architecture: JS thread, Bridge, Native.
      </Text>
    </View>
  );
}

// ==================================================
// 🟢 Q7. How navigation works (React Navigation)? 🧭
// Types: Stack, Tab, Drawer. Install react-navigation.
// Wrap in NavigationContainer and use navigators.
//
// Example minimal stack navigator:
const Stack = createNativeStackNavigator();
function _Home({ navigation }) {
  return (
    <View style={styles.center}>
      <Text>Q7 — Home</Text>
      <Pressable onPress={() => navigation.navigate('Q7_Detail')}>
        <Text>Go</Text>
      </Pressable>
    </View>
  );
}
function _DetailQ7() {
  return (
    <View style={styles.center}>
      <Text>Q7 — Detail</Text>
    </View>
  );
}
export function Q7_NavDemo() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Q7_Home" component={_Home} />
        <Stack.Screen name="Q7_Detail" component={_DetailQ7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ==================================================
// 🟢 Q8. How to handle lists: FlatList vs ScrollView 📜
// ScrollView renders all children at once.
// FlatList renders only visible rows (windowing).
// FlatList props: data, renderItem, keyExtractor,
// initialNumToRender, getItemLayout, onEndReached.
//
// Example FlatList:
export function Q8_FlatList() {
  const data = Array.from({ length: 20 }, (_, i) => ({
    id: String(i + 1),
    name: 'Item ' + String(i + 1),
  }));
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={{ padding: 8 }}>{item.name}</Text>
      )}
    />
  );
}

// ==================================================
// 🟢 Q9. Flexbox in RN basics 📐
// Default flexDirection is 'column'.
// Common props: flex, flexDirection,
// justifyContent, alignItems, alignSelf.
//
// Example row with three boxes:
export function Q9_FlexDemo() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      }}
    >
      <View style={{ width: 40, height: 40, backgroundColor: 'red' }} />
      <View style={{ width: 40, height: 40, backgroundColor: 'blue' }} />
      <View style={{ width: 40, height: 40, backgroundColor: 'green' }} />
    </View>
  );
}

// ==================================================
// 🟢 Q10. Hooks in RN: useState, useEffect, etc. 🪝
// Hooks provide state and lifecycle in functions.
// useState for local state, useEffect for side effects,
// useRef for refs, useCallback/useMemo for optimization.
//
// Example: counter + effect:
export function Q10_Hooks() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    // effect runs after render
  }, [count]);
  return (
    <Pressable onPress={() => setCount(count + 1)} style={styles.center}>
      <Text>Q10 — Count {count}</Text>
    </Pressable>
  );
}

// ==================================================
// 🟢 Q11. JS thread vs Native thread vs Bridge (detail) 🔁
// The JS thread executes JS logic. Native thread runs UI.
// Bridge used to marshal messages; it could be a bottleneck.
// JSI replaces bridge by enabling direct C++ calls.
// Fabric and TurboModules reduce overhead and improve perf.
//
// Short text component:
export function Q11_Threads() {
  return (
    <View style={styles.card}>
      <Text>Q11 — JS thread, Native thread, Bridge overview</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q12. Props vs State — difference explained ⚖️
// Props are read-only inputs from parent.
// State is internal, mutable via setState/useState.
// Changing state triggers re-render of component.
//
// Example showing both:
export function Q12_PropsState({ name = 'Guest' }) {
  const [count, setCount] = React.useState(0);
  return (
    <View style={{ padding: 10 }}>
      <Text>Q12 — Hello {name}</Text>
      <Pressable onPress={() => setCount(count + 1)} style={{ marginTop: 8 }}>
        <Text>Clicked {count} times</Text>
      </Pressable>
    </View>
  );
}

// ==================================================
// 🟢 Q13. Controlled vs Uncontrolled components 🎛️
// Controlled: component value is from state.
// Uncontrolled: uses ref for value (native input).
// RN typically uses controlled for predictable updates.
//
// Example controlled TextInput:
export function Q13_Controlled() {
  const [text, setText] = React.useState('');
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type..."
        style={{ borderWidth: 1, padding: 8 }}
      />
      <Text style={{ marginTop: 8 }}>You typed: {text}</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q14. State management options (Context/Redux/Zustand) ⚙️
// Small apps: useState + Context.
// Medium/large apps: Redux (Redux Toolkit).
// Lightweight alternatives: Zustand, Recoil, MobX.
// Choose by app complexity & team familiarity.
//
// Example Context quick usage:
const ThemeContext = React.createContext('light');
export function Q14_ContextDemo() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeConsumer />
    </ThemeContext.Provider>
  );
}
function ThemeConsumer() {
  const theme = React.useContext(ThemeContext);
  return <Text>Q14 — Theme: {theme}</Text>;
}

// ==================================================
// 🟢 Q15. Forms & validation (Formik, Yup) ✍️
// For complex forms use Formik + Yup.
// For simple forms handle state manually.
//
// Example simple validation:
export function Q15_FormSimple() {
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState('');
  const submit = () => {
    if (!email.includes('@')) setErr('Invalid email');
    else setErr(''); // proceed
  };
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={{ borderWidth: 1, padding: 8 }}
      />
      {!!err && <Text style={{ color: 'red' }}>{err}</Text>}
      <Pressable onPress={submit} style={{ marginTop: 8 }}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}

// ==================================================
// 🟢 Q16. Offline storage: AsyncStorage, MMKV, Realm 🗄️
// - AsyncStorage: simple key-value.
// - MMKV: fast mobile storage.
// - Realm/WatermelonDB: complex models & sync.
// - SQLite: relational queries.
//
// Example AsyncStorage snippet (pseudo-await):
/*
import AsyncStorage from '@react-native-async-storage/async-storage';
await AsyncStorage.setItem('token', 'abc');
const t = await AsyncStorage.getItem('token');
*/
export function Q16_StorageNote() {
  return (
    <View style={styles.card}>
      <Text>Q16 — Use AsyncStorage / Realm / MMKV etc.</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q17. useEffect / useCallback / useMemo usage 🔧
// useEffect for side effects; cleanup via return fn.
// useCallback memoizes functions by deps.
// useMemo memoizes computed values.
//
// Example useMemo & useCallback:
export function Q17_Optimize({ items = [] }) {
  const expensive = React.useMemo(() => items.length * 2, [items]);
  const handler = React.useCallback(() => console.log(expensive), [expensive]);
  return (
    <View style={{ padding: 8 }}>
      <Text>Q17 — Computed: {expensive}</Text>
      <Pressable onPress={handler}>
        <Text>Log</Text>
      </Pressable>
    </View>
  );
}

// ==================================================
// 🟢 Q18. Higher-Order Components (HOC) explanation 🧩
// HOC: function that returns a new component with extra
// behavior. Useful for cross-cutting concerns.
//
// Example simple HOC:
function withLogger(Wrapped) {
  return function Logger(props) {
    React.useEffect(() => {
      console.log('Mounted', Wrapped.name);
    }, []);
    return <Wrapped {...props} />;
  };
}
function BaseComp() {
  return <Text>Base</Text>;
}
export const Q18_HOCExample = withLogger(BaseComp);

// ==================================================
// 🟢 Q19. Handling images (local, remote, caching) 🖼️
// Use require('./img.png') for local assets.
// Use uri for remote. Use libraries like FastImage for
// caching & performance. Optimize sizes before shipping.
//
// Example remote image usage:
export function Q19_Image() {
  return (
    <Image
      source={{ uri: 'https://placekitten.com/140/140' }}
      style={{ width: 80, height: 80 }}
    />
  );
}

// ==================================================
// 🟢 Q20. Debugging tools: Flipper, RN Debugger 🐞
// Use console.log, RN Debugger, Flipper network & layout,
// Sentry/Crashlytics for production crash reporting.
//
// Small logging example:
export function Q20_Debug() {
  React.useEffect(() => {
    console.log('Q20 debug mounted');
  }, []);
  return (
    <View style={styles.center}>
      <Text>Q20 — Check console or Flipper</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q21. Native Modules: why and when? 🛠️
// When RN lacks API, write native modules in Java/Kotlin or
// Obj-C/Swift, expose methods to JS via NativeModules.
// Use TurboModules (new arch) for faster native calls.
//
// Pseudo JS usage:
export function Q21_NativeModuleNote() {
  return (
    <View style={styles.card}>
      <Text>
        Q21 — NativeModules allow calling platform APIs.
      </Text>
    </View>
  );
}

// ==================================================
// 🟢 Q22. Create a native module (high-level steps) 🧭
// Android: extend ReactContextBaseJavaModule, annotate
// methods with @ReactMethod, register package.
// iOS: create RCTBridgeModule and export methods.
// Then use NativeModules.MyModule.method() in JS.
//
// Short textual example:
export function Q22_NativeSteps() {
  return (
    <View style={styles.card}>
      <Text>Q22 — Native module creation steps (see notes)</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q23. React Native Bridge and JSI differences 🔁
// Bridge serialized messages JSON -> platform.
// JSI is direct C++ binding, removes JSON overhead.
// Fabric + TurboModules with JSI improve perf.
//
// Quick note component:
export function Q23_BridgeNote() {
  return (
    <View style={styles.center}>
      <Text>Q23 — Bridge vs JSI summary</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q24. Push Notifications: FCM & APNs 🔔
// Use @react-native-firebase/messaging or OneSignal.
// Steps: setup credentials, request permissions,
// handle foreground/background messages.
//
// Example listener (onMessage):
/*
import messaging from '@react-native-firebase/messaging';
useEffect(() => {
  const unsub = messaging().onMessage(async msg => {
    Alert.alert('Msg', JSON.stringify(msg));
  });
  return unsub;
}, []);
*/
export function Q24_PushNote() {
  return (
    <View style={styles.card}>
      <Text>Q24 — Use FCM / APNs via firebase or OneSignal</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q25. Deep Linking: open app to specific screen 🔗
// Configure URL schemes or universal links for iOS,
// intent filters for Android, and React Navigation
// linking config to map paths to screens.
//
// Quick example string:
export function Q25_DeepLink() {
  return (
    <View style={styles.center}>
      <Text>Q25 — Deep linking opens specific screen</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q26. Animations: Animated, Reanimated, Lottie 🎞️
// Animated: built-in, ok for basic tasks.
// Reanimated 2: native-driven, performant gestures.
// Lottie: vector animations from After Effects.
//
// Example Animated fade:
export function Q26_AnimatedFade() {
  const fade = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View style={{ opacity: fade, padding: 8 }}>
      <Text>Q26 — Fade in text</Text>
    </Animated.View>
  );
}

// ==================================================
// 🟢 Q27. CodePush (OTA updates) — concept 📡
// CodePush via App Center lets you update JS bundle
// OTA without app store release for minor JS/asset fixes.
// Use cautiously for permitted changes only.
//
// Note/demo text:
export function Q27_CodePushNote() {
  return (
    <View style={styles.card}>
      <Text>Q27 — CodePush enables OTA JS updates</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q28. Memory leaks & performance issues ⚠️
// Always cleanup timers, subscriptions in useEffect.
// Use PureComponent/React.memo to avoid re-renders.
// Avoid heavy computations on render (useMemo).
//
// Small cleanup example:
export function Q28_Cleanup() {
  React.useEffect(() => {
    const id = setInterval(() => {}, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <View style={styles.center}>
      <Text>Q28 — Timer cleanup demo</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q29. Hermes JS engine — benefits 🐎
// Hermes speeds startup, reduces memory and APK size.
// Enable in android/app/build.gradle and iOS Podfile if needed.
//
// Note:
export function Q29_Hermes() {
  return (
    <View style={styles.card}>
      <Text>Q29 — Hermes improves JS performance</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q30. App security best practices 🔐
// Use secure storage (Keychain/MMKV/KeyStore).
// Use HTTPS + certificate pinning for sensitive apps.
// Do not hardcode secrets; obfuscate release builds.
//
// Short note:
export function Q30_Security() {
  return (
    <View style={styles.card}>
      <Text>Q30 — Secure sensitive tokens, use HTTPS</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q31. FlatList performance optimizations ⚡
// Use keyExtractor, getItemLayout for fixed rows,
// initialNumToRender, removeClippedSubviews (if needed),
// renderItem as memoized component.
//
// Example getItemLayout:
export function Q31_FlatListOpt() {
  const data = Array.from({ length: 50 }, (_, i) => ({ id: String(i), text: 'Row ' + i }));
  return (
    <FlatList
      data={data}
      keyExtractor={(it) => it.id}
      initialNumToRender={8}
      getItemLayout={(d, i) => ({ length: 40, offset: 40 * i, index: i })}
      renderItem={({ item }) => <Text style={{ height: 40 }}>{item.text}</Text>}
    />
  );
}

// ==================================================
// 🟢 Q32. Offline storage options recap 🗃️
// AsyncStorage, MMKV, Realm, WatermelonDB, SQLite.
// Choose based on data size, sync needs, queries.
//
// Note:
export function Q32_OfflineNote() {
  return (
    <View style={styles.card}>
      <Text>Q32 — Choose storage: AsyncStorage/Realm/MMKV</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q33. Integrating camera & location 📍📷
// Use vision-camera or expo-camera for camera.
// Use react-native-geolocation-service for GPS.
// Ask runtime permissions for Android/iOS.
//
// Small location usage hint component:
export function Q33_CameraLocationNote() {
  return (
    <View style={styles.card}>
      <Text>Q33 — Use react-native-vision-camera / GPS libs</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q34. Debugging: RN Debugger, Flipper, Sentry 🛠️
// RN Debugger: Redux + network + console.
// Flipper: layout inspector, network, React devtools.
// Sentry/Crashlytics for production error tracking.
//
// Small note:
export function Q34_DebugTools() {
  return (
    <View style={styles.center}>
      <Text>Q34 — Use Flipper & RN Debugger</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q35. useEffect vs useLayoutEffect difference 🧷
// useEffect runs after paint; useLayoutEffect runs
// synchronously before painting. Use layout when you
// must measure DOM or set options before render.
//
// Small example usage:
export function Q35_LayoutEffect() {
  React.useLayoutEffect(() => {
    // run before paint: set layout or navigation title
  }, []);
  return (
    <View style={styles.center}>
      <Text>Q35 — useLayoutEffect (see code comment)</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q36. Implement Dark Mode (themes) 🌙
// Use useColorScheme() to detect system theme.
// Or use Context + custom toggles for manual theme.
//
// Small theme sample:
import { useColorScheme } from 'react-native';
export function Q36_DarkMode() {
  const scheme = useColorScheme();
  return (
    <View style={{ padding: 12 }}>
      <Text>Q36 — Theme: {scheme}</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q37. i18n and localization approach 🌐
// Use react-native-localize + i18next or react-intl.
// Store translations and pick language by locale or user.
//
// Example small text:
export function Q37_I18nNote() {
  return (
    <View style={styles.card}>
      <Text>Q37 — Use i18next + react-native-localize</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q38. Testing RN apps: Jest, RNTL, Detox ✅
// Jest for unit tests, React Native Testing Library
// for component tests, Detox for end-to-end testing.
//
// Note:
export function Q38_TestingNote() {
  return (
    <View style={styles.card}>
      <Text>Q38 — Jest + RNTL + Detox for E2E</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q39. CI/CD pipelines for RN (Fastlane, AppCenter) 🔁
// Use GitHub Actions/Bitrise/AppCenter for builds.
// Use Fastlane for automated signing & uploading.
//
// Small note:
export function Q39_CI_CD() {
  return (
    <View style={styles.card}>
      <Text>Q39 — CI/CD: Fastlane, Bitrise, AppCenter</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q40. TurboModules & Fabric (new arch) ⚙️
// TurboModules: modern native modules via JSI.
// Fabric: new UI layer reduces overhead.
// Advantages: faster startup & smoother UI.
//
// Short note:
export function Q40_NewArch() {
  return (
    <View style={styles.card}>
      <Text>Q40 — TurboModules & Fabric improve perf</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q41. Custom hooks: reuse logic across comps 🔁
// Custom hooks encapsulate reusable behavior.
// Use them to share subscription, fetch logic, etc.
//
// Example hook: useOnlineStatus (simple):
import NetInfo from '@react-native-community/netinfo';
export function useOnlineStatus() {
  const [online, setOnline] = React.useState(true);
  React.useEffect(() => {
    const sub = NetInfo.addEventListener((state) => {
      setOnline(!!state.isConnected);
    });
    return () => sub();
  }, []);
  return online;
}
export function Q41_CustomHookDemo() {
  const online = useOnlineStatus();
  return <Text>Q41 — Online: {String(online)}</Text>;
}

// ==================================================
// 🟢 Q42. Gestures: react-native-gesture-handler 🎯
// Use gesture-handler for performant gestures.
// Combine with Reanimated for smooth animations.
//
// Example PanGestureHandler shorthand:
/*
import { PanGestureHandler } from 'react-native-gesture-handler';
<PanGestureHandler onGestureEvent={...}><View/></PanGestureHandler>
*/
export function Q42_GestureNote() {
  return (
    <View style={styles.card}>
      <Text>Q42 — Use gesture-handler + reanimated</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q43. Secure storage: Keychain and Keystore 🔐
// Use react-native-keychain or secure storage libs.
// Store tokens in platform keystore, not AsyncStorage.
//
// Short demo note:
export function Q43_SecureNote() {
  return (
    <View style={styles.card}>
      <Text>Q43 — Store secrets in Keychain / Keystore</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q44. Profiling & measuring performance 📊
// Use Flipper, Systrace, Hermes profiler.
// Measure JS & native timings and optimize hotspots.
//
// Note component:
export function Q44_ProfileNote() {
  return (
    <View style={styles.center}>
      <Text>Q44 — Use Flipper & Systrace for profiling</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q45. Background tasks: BackgroundFetch, Headless JS 💤
// BackgroundFetch for periodic jobs.
// Headless JS on Android for background handlers.
//
// Example note:
export function Q45_BackgroundNote() {
  return (
    <View style={styles.card}>
      <Text>Q45 — Use BackgroundFetch or Headless JS</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q46. Payments integration: Stripe, Razorpay 💳
// Use platform SDKs or wrappers (Stripe RN SDK).
// Follow PCI rules: use tokenized flows, never store card.
//
// Small note:
export function Q46_PaymentsNote() {
  return (
    <View style={styles.card}>
      <Text>Q46 — Use Stripe/Razorpay SDK and tokens</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q47. Deep linking recap and examples 🔗
// Configure app schemes and navigation linking.
// React Navigation handles mapping URLs to screens.
//
// Short note:
export function Q47_DeepLinkNote() {
  return (
    <View style={styles.center}>
      <Text>Q47 — Configure linking and handle params</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q48. Push notifications detailed notes 🔔
// Ask permissions, handle tokens, handle messages
// in foreground/background and notification opened events.
//
// Small listener note:
export function Q48_PushNote() {
  return (
    <View style={styles.card}>
      <Text>Q48 — Handle FCM/APNs & notification taps</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q49. Animations deeper: Reanimated vs Animated 🎬
// Animated: JS driven; Reanimated: native-driven.
// For complex gestures/animations use Reanimated v2.
//
// Small note:
export function Q49_AnimationNote() {
  return (
    <View style={styles.card}>
      <Text>Q49 — Reanimated for high perf animations</Text>
    </View>
  );
}

// ==================================================
// 🟢 Q50. Publishing apps: Play Store & App Store 🚀
// Android: generate AAB, sign with keystore, upload.
// iOS: archive in Xcode, sign with Apple account,
// submit via App Store Connect and TestFlight.
//
// Small checklist component:
export function Q50_PublishChecklist() {
  return (
    <View style={styles.card}>
      <Text>Q50 — Build, sign, upload to store console</Text>
    </View>
  );
}

// ==================================================
// Shared styles used by examples:
const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    margin: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
});

// End of react_native_interview_full.js
// File contains Q1..Q50 with examples and notes.
// Tell me if you want:
// - Extra expanded examples for any Q,
// - A compact flashcard version,
// - Or conversion to markdown / printable PDF.
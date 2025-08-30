// =====================================================================
// Topic 1 — React Native Basics & Core Concepts (Beginner → 3 yrs prep)
// =====================================================================

// 1) What is React Native? — simple explanation
/*
React Native (RN) is a framework that lets you build mobile apps
(iOS + Android) using JavaScript (or TypeScript) and React concepts 
(components, props, state).

Unlike hybrid apps that use a webview (HTML inside app), RN renders 
real native UI components (buttons, text, lists) so it feels native.

Elevator answer (interview-ready): 
"React Native is a JavaScript-based framework for building cross-platform 
mobile apps that render native UI components, enabling one codebase for 
iOS and Android."

Why that matters: faster development (one codebase), native look and
performance for many common cases, and easy access to native device APIs.
*/

// =====================================================================
// 2) How RN differs from ReactJS & Native apps — quick table
/*
| Area        | ReactJS (web)      | React Native (mobile) | Native (Android/iOS) |
|-------------|------------------|----------------------|---------------------|
| UI units    | div, span, img    | View, Text, Image    | Android Views / UIKit |
| Styling     | CSS               | StyleSheet (JS obj)  | XML / Storyboards    |
| Where it runs| Browser           | JS engine inside app | Native platform runtime |
| Performance | Browser constraints| Near-native for UI  | Full native performance |
| Code sharing| Web only          | iOS + Android        | Platform-specific    |

Interview one-liner: "React Native sits between web React and native
development — React-like dev DX with native rendering."
*/

// =====================================================================
// 3) RN Architecture — simple diagram + key ideas
/*
High-level layers:

JS Thread — runs your React code (components, business logic).

Bridge / JSI — communication between JS and Native.
  - Old RN: Bridge (JSON messages)
  - New RN: JSI + TurboModules + Fabric → faster, less serialization

Native Thread — runs UI rendering and device APIs (camera, GPS, etc.)

ASCII flow:
Your React code (JS)  -->  Bridge/JSI  -->  Native code (UI/API)

Key interview points:
- Bridge can be bottleneck — new JSI/Fabric aims to reduce that.
- Heavy CPU work → offload to native module or background thread.
- Know when to use native modules: missing API or performance-critical code.
*/

// =====================================================================
// 4) Core components — what you must know (and why)
/*
View — container (like <div>), used for layout
Text — displays text (everything textual must be inside Text)
Image — local or remote images
ScrollView — scrollable area, renders all children (small lists)
FlatList — efficient list for large data (virtualized)
SectionList — grouped lists with section headers
TextInput — input field
Pressable / TouchableOpacity / TouchableNativeFeedback — buttons
ActivityIndicator — loading spinner
SafeAreaView — avoid notches / status bar areas
*/

// Example: Simple component
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

export default function Hello() {
  return (
    <View style={{padding: 16}}>
      <Text style={{fontSize: 20}}>Hello, RN!</Text>
      <Image
        source={{uri: 'https://placekitten.com/120/120'}}
        style={{width: 100, height: 100, marginTop: 8}}
      />
      <Pressable onPress={() => alert('Pressed!')}>
        <Text>Tap me</Text>
      </Pressable>
    </View>
  );
}

// =====================================================================
// 5) JSX — what it is and how it works
/*
JSX looks like HTML but it's syntactic sugar for React.createElement calls.

Example:
<View><Text>Hello</Text></View>

Becomes:
React.createElement(View, null, React.createElement(Text, null, 'Hello'))

Short tip: Always return one root element (View or Fragment)
*/

// =====================================================================
// 6) Styling in RN — StyleSheet & Flexbox
/*
- StyleSheet objects — camelCase properties (backgroundColor, marginLeft)
- No CSS files; styles are JS objects
- Layout uses Flexbox (default direction = 'column')

Flexbox cheat-sheet:
flexDirection: 'row' | 'column'
justifyContent: 'flex-start' | 'center' | 'space-between'
alignItems: 'flex-start' | 'center' | 'stretch'

Example:
const styles = {
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  card: { padding: 12, borderRadius: 8, backgroundColor: '#fff' },
}

Numbers are dp (device-independent pixels)
*/

// =====================================================================
// 7) Props vs State
/*
Props: read-only inputs passed by parent
<MyComp name="Kalyan" />

State: internal, mutable; changing it triggers re-render

Example:
function Greeting({ name }) { return <Text>Hello {name}</Text>; }

function Counter() {
  const [count, setCount] = React.useState(0);
  return <Text onPress={() => setCount(c => c + 1)}>Count: {count}</Text>;
}
*/

// =====================================================================
// 8) Lifecycle vs Hooks
/*
Class lifecycle methods:
componentDidMount, componentDidUpdate, componentWillUnmount

Functional components use hooks:
useEffect(() => { ... }, []) // mount
useEffect(() => { ... }, [dep]) // dependency changed
useEffect(() => { return () => cleanup }, []) // unmount cleanup

Example:
React.useEffect(() => {
  const id = setInterval(() => console.log('tick'), 1000);
  return () => clearInterval(id);
}, []);
*/

// =====================================================================
// 9) Controlled vs Uncontrolled inputs
/*
Controlled: value bound to state — recommended
const [text, setText] = useState('');
<TextInput value={text} onChangeText={setText} />

Uncontrolled: read value via ref occasionally — less common

Controlled is easier for validation, predictable updates, forms
*/

// =====================================================================
// 10) Lists: ScrollView vs FlatList vs SectionList
/*
ScrollView: renders all children at once → small sets (<20)
FlatList: virtualized → renders only visible rows, keyExtractor + getItemLayout + onEndReached
SectionList: grouped lists with section headers

Example:
<FlatList
  data={items}
  keyExtractor={i => i.id}
  renderItem={({ item }) => <Text>{item.title}</Text>}
/>
*/

// =====================================================================
// 11) Handling touch & gestures
/*
Use Pressable or TouchableOpacity for simple buttons
For complex gestures (drag, swipe, pinch) → react-native-gesture-handler + reanimated

Example:
<Pressable onPress={() => console.log('pressed')}>
  <Text>Press me</Text>
</Pressable>
*/

// =====================================================================
// 12) Debugging essentials
/*
console.log for dev
React Native Debugger (Redux + network + console)
Flipper — layout inspector, network, plugins
Sentry / Crashlytics — production crash reports
*/

// =====================================================================
// 13) Quick performance tips
/*
- Avoid inline functions in large lists (useCallback)
- Use React.memo / PureComponent
- Use FlatList instead of ScrollView for big lists
- Use getItemLayout if fixed sizes
- Optimize images, consider FastImage
- Use Hermes engine
- Avoid unnecessary re-renders
Example:
const Row = React.memo(({ item }) => <Text>{item.text}</Text>);
*/

// =====================================================================
// 14) Common beginner pitfalls
/*
- Non-text inside <Text>
- Missing unique keys in lists
- Heavy JS thread work → offload
- Leaking timers or listeners
- Storing sensitive data in AsyncStorage (use secure storage)
*/

// =====================================================================
// 15) Short sample answers
/*
- What is RN? “A JS framework to build native mobile interfaces”
- Why use FlatList? “Virtualizes rows, improves performance”
- How manage side effects? “useEffect with cleanup”
*/

// =====================================================================
// 16) Practice tasks
/*
- Small app with header, image, text, button counter
- Controlled form with validation
- FlatList of 100 items with React.memo
- Replace ScrollView with FlatList
- Timer in useEffect with cleanup
- Pressable with alert
*/

// =====================================================================
// 17) Helpful commands
/*
Start RN project:
npx react-native init MyApp
cd MyApp
npx react-native run-android
npx react-native run-ios

Or Expo:
npx create-expo-app MyExpoApp
npx expo start

Community libs:
@react-navigation/native, @react-native-async-storage/async-storage,
@react-native-community/netinfo, @react-native-firebase/*
*/

// =====================================================================
// 18) Interviewer expectations (3 yrs experience)
/*
- Explain why certain choices (FlatList vs ScrollView, controlled vs uncontrolled)
- Follow-ups on performance and architecture:
  - Bridge & JSI
  - When to write native module
  - Fix JS freeze issues
- Be ready to walk through small component from previous projects
*/

// =====================================================================
// 19) Quick checklist
/*
- Can explain RN vs ReactJS
- Know JS thread vs Native thread vs Bridge (JSI)
- Built small component with View, Text, Image
- Controlled TextInput implemented
- FlatList with keyExtractor
- useEffect cleanup
*/

// =====================================================================
// 20) Next topic
// Topic 2: Navigation & UI
// Will cover React Navigation, Stack/Tab/Drawer, gestures, animations

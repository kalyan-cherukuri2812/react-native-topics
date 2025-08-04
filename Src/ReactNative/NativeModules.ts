// React Native Native Modules - Basic Level Interview Q&A
// Prepared for future interview preparation

/*
1. What are Native Modules in React Native? Why are they needed?

React Native uses JavaScript to build mobile apps, but some features 
(e.g., Bluetooth, biometrics, sensors) are only available through native 
platform code (Java/Kotlin for Android, Objective-C/Swift for iOS).  
To access those native features from JavaScript, React Native provides 
a system called Native Modules.

Think of Native Modules as a bridge between JS and Android/iOS code.
*/

/*
2. How does React Native bridge JavaScript with native code?

React Native uses a Bridge — a communication layer that passes data 
between the JS thread and the native thread.  
JS sends a command → Bridge → Native → executes native code → result 
comes back → Bridge → JS.
*/

/*
3. What’s the difference between Native Modules and Native UI Components?

| Native Modules         | Native UI Components         |
|------------------------|------------------------------|
| Used for native logic  | Used for native views (e.g., Camera, Map) |
| No UI                  | Handles UI elements          |

Example: You use a Native Module to access the device’s battery level, 
but a Native UI Component to show a native camera preview.
*/

/*
4. What languages are used to write Native Modules?

- Android: Java or Kotlin  
- iOS: Objective-C or Swift
*/

/*
5. What is the role of the React Native Bridge in Native Module communication?

The Bridge allows asynchronous communication between JS and native code 
using JSON-like messages.  
It ensures both sides can talk without blocking each other.
*/

/*
6. Can you use Native Modules in functional components?

Yes.  
You import and use them like any JS object in any component — class or function.

Example:
*/
import {NativeModules} from 'react-native';

NativeModules.MyNativeModule.doSomething();

/*
7. When would you use a Native Module instead of JavaScript?

Use Native Modules when:
- JS doesn't have access (e.g., native SDKs)
- Performance-sensitive code (e.g., heavy processing)
- You need native-only features (camera, NFC, sensors)
*/

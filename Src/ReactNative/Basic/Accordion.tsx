import React, { useState } from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
const data = [
  // JavaScript Topics
  {
    title: 'JavaScript Basics',
    content:
      'Learn variables, functions, conditionals, and loops in JavaScript',
  },
  {
    title: 'ES6+ Features',
    content:
      'Explore let/const, arrow functions, destructuring, template literals, and spread/rest operators',
  },
  {
    title: 'Asynchronous JavaScript',
    content: 'Understand callbacks, promises, async/await, and the event loop',
  },
  {
    title: 'JavaScript Arrays',
    content: 'Master array methods like map, filter, reduce, find, and forEach',
  },
  {
    title: 'JavaScript Objects',
    content:
      'Learn object creation, property access, methods, and prototypal inheritance',
  },
  {
    title: 'Closures and Scope',
    content: 'Understand closures, lexical scope, and variable hoisting',
  },
  {
    title: 'Error Handling',
    content: 'Use try...catch, throw, and understand common JavaScript errors',
  },
  {
    title: 'Modules and Imports',
    content: 'Work with ES modules using import/export syntax',
  },

  // React Native Topics
  {
    title: 'React Native Basics',
    content: 'Build UI using components like View, Text, Image, and StyleSheet',
  },
  {
    title: 'React Native Navigation',
    content:
      'Implement stack, tab, and drawer navigation using React Navigation',
  },
  {
    title: 'State Management',
    content:
      'Manage component state using useState, useEffect, and Context API',
  },
  {
    title: 'Styling in React Native',
    content: 'Use Flexbox, conditional styling, and responsive layouts',
  },
  {
    title: 'API Integration',
    content: 'Fetch data using fetch or axios and display it in your app',
  },
  {
    title: 'React Native Forms',
    content: 'Build forms using TextInput, Button, and handle input validation',
  },
  {
    title: 'Performance Optimization',
    content: 'Use FlatList, memoization, and avoid unnecessary re-renders',
  },
  {
    title: 'Debugging and Testing',
    content: 'Use console.log, Flipper, and tools like Jest for unit testing',
  },
];
const Accordion = () => {
    const [openIndex,setOpenIndex]=useState(null)


  const renderUiItem = ({item, index}) => {
    console.log('jhgf', item, index);
    const {title, content} = item;
    const handleToggle=(index)=>{
        setOpenIndex(prev=>prev==index?null:index)
    }
    return (
      <View style={styles.accordionItem}>
        <TouchableOpacity style={styles.titleBlock} onPress={()=>handleToggle(index)}>
          <Text>{title}</Text><Text >{openIndex==index?"⌃":"⌄"}</Text>
        </TouchableOpacity>
        {openIndex==index&&<View style={styles.contentBlock}>
          <Text>{content}</Text>
        </View>}
        
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Accordion</Text>
      <FlatList data={data} renderItem={renderUiItem} />
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:"center"
  },
  titleBlock:{
    borderWidth:1,
    padding:5,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"lightgray",
    width:"100%"
  },
  contentBlock:{
     padding:5
  },
  accordionItem:{
    width:"100%",
    borderWidth:1,
    marginVertical:9
  }
});

// Debounce runs a function after a delay, once the event has stopped —
//  like waiting 500ms after the user stops typing to call an API.




import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, ActivityIndicator } from 'react-native';

const DebouncedApiCall = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  // Debounce logic inside useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim() !== '') {
        callApi(query);
      }
    }, 500); // debounce delay

    return () => clearTimeout(timer); // cleanup on value change
  }, [query]);

  const callApi = async (text) => {
    try {
      setLoading(true);
      console.log('Calling API with:', text);

      // Simulate API delay
      setTimeout(() => {
        setResult(`Results for "${text}"`);
        setLoading(false);
      }, 1000);

      // Example real API (if needed)
      // const response = await fetch(`https://api.example.com/search?q=${text}`);
      // const data = await response.json();
      // setResult(JSON.stringify(data));
    } catch (error) {
      setResult('Something went wrong.');
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
      />
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <Text style={styles.result}>{result}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  result: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default DebouncedApiCall;

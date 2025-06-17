import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
const getRandomNum = () => {
  const randNum = (Math.floor(Math.random() * 100) + 1).toString();
  return randNum;
};

export default function GusstheNum() {
  const [randNum, setRandNum] = useState(getRandomNum());
  const [gusVal, setGusVal] = useState('');
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(1);

  const handleGussNumber = () => {
    if (gusVal == randNum) {
      setMessage(`Congracts! your gussed number in ${count} attempts`);
      setCount(1);
    } else if (gusVal < randNum) {
      setMessage(`Too Low, try again`);
      setCount(perv => perv + 1);
    } else if (gusVal > randNum) {
      setMessage('Too High, try again');
      setCount(perv => perv + 1);
    }
  };

  const reset = () => {
    setRandNum(getRandomNum());
    setGusVal('');
    setMessage('');
  };
  
  return (
    <View style={styles.container}>
      <Text>Guess the Number {randNum}</Text>
      <TextInput
        style={styles.input}
        value={gusVal}
        keyboardType="decimal-pad"
        placeholder="Enter a number between 1 and 100"
        onChangeText={setGusVal}
      />
      <TouchableHighlight onPress={handleGussNumber} style={styles.guessBtn}>
        <View>
          <Text>Guess</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={reset} style={styles.guessBtn}>
        <View>
          <Text>Reset</Text>
        </View>
      </TouchableHighlight>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: '100%',
  },
  guessBtn: {
    backgroundColor: 'skyblue',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 7,
  },
});

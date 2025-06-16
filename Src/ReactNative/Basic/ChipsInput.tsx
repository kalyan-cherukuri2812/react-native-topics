import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

type chipType = {
  id: string;
  value: string;
};

const ChipsInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [chipsData, setChipsData] = useState<chipType[]>([]);

  const handleAddChip = () => {
    if (inputValue.trim() == '') return;
    const newChip = {id: (chipsData.length + 1).toString(), value: inputValue};
    setChipsData(prev => [newChip, ...prev]);
    setInputValue('');
  };
  const handleRemove=(id)=>{
    setChipsData(prev=>prev.filter(e=>e.id!=id))


  }
  const RenderChip = ({data}) => {
    return (
      <View style={styles.chipsBlock}>
        {data.map((e, i) => (
          <View key={e.i} style={styles.chip}>
            <Text>{e.value}</Text>
            <Text onPress={()=>handleRemove(e.id)} style={styles.removeText}>X</Text>
          </View>
        ))}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text>Chips Input</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter chip"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity style={styles.addbtn} onPress={handleAddChip}>
        <Text>Add Chip</Text>
      </TouchableOpacity>
      {/* <FlatList
        
        data={chipsData}
        renderItem={renderChip}
        keyExtractor={item => item.id}
      /> */}
      <RenderChip data={chipsData} />
    </View>
  );
};

export default ChipsInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 20,
  },
  input: {
    borderWidth: 1,
  },
  addbtn: {
    height: 40,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 9,
  },
  chip: {
    backgroundColor: 'lightgray',
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    minWidth:70,
    paddingHorizontal: 10,
    borderRadius:"20%"
  },
  chipsBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  removeText:{
    marginLeft:10,
    color:"red"
  }
});

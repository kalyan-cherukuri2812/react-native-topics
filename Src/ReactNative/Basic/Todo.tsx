import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

type todoDataType = {
  id: string;
  task: string;
  isCompleted: boolean;
};

export default function Todo() {
  const [addTodo, setAddTodo] = useState<string>('');
  const [todoData, setTodoData] = useState<todoDataType[]>([]);

  const handleAddTodo = () => {
    if (!addTodo.trim()) return;
    const newTodo: todoDataType = {
      id: (todoData.length + 1).toString(),
      task: addTodo.trim(),
      isCompleted: false,
    };
    // setTodoData([newTodo, ...todoData]);
    setTodoData(prev => [newTodo, ...prev]);
    setAddTodo('');
  };
  console.log('todo', todoData);
  const cardPressHandle = (id: string) => {
    console.log('kjhgftyujh');
    setTodoData(
      todoData.map(e =>
        id == e.id ? {id: e.id, task: e.task, isCompleted: !e.isCompleted} : e,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    const delData = todoData.filter(e => id != e.id);
    setTodoData(delData);
  };

  const cardPressHandleOnLongPress = (id: string, task: string) => {
    Alert.alert(
      'Delete',
      `Want to delete: ${task}`,
      [{text: 'delete', onPress: () => deleteTodo(id)}],
      {cancelable: true},
    );
  };
  console.log('lkijuhytrftyu', todoData);
  const renderTodo = ({item}: {item: todoDataType}) => {
    const {id, task, isCompleted} = item;
    console.log('kjhgfgu', id, task, isCompleted);
    return (
      <TouchableHighlight
        activeOpacity={0.1}
        underlayColor={'y'}
        onPress={() => cardPressHandle(id)}
        onLongPress={() => cardPressHandleOnLongPress(id, task)}>
        <View style={styles.todoCard}>
          <Text style={isCompleted && styles.completedText}>{task}</Text>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View style={styles.container}>
      <Text>Add To-do</Text>
      <TextInput
        style={styles.input}
        value={addTodo}
        onChangeText={setAddTodo}
        placeholder="Enter new task"
      />
      <TouchableHighlight
        activeOpacity={0.9}
        onPress={handleAddTodo}
        style={styles.addTodoBtn}
        underlayColor={'#BDBDBD'}>
        <Text>Add Todo</Text>
      </TouchableHighlight>

      <FlatList
        data={todoData}
        renderItem={renderTodo}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    paddingTop: 50,
    padding: 30,
  },
  input: {
    backgroundColor: 'white',
  },
  addTodoBtn: {
    marginTop: 10,
    backgroundColor: 'yellow',
    height: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  clicked: {
    backgroundColor: 'red',
  },
  todoCard: {
    padding: 15,
    backgroundColor: 'pink',
    marginTop: 20,
    borderRadius: 7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  completedText: {
    textDecorationLine: 'line-through',
  },
});

/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';


function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
    const Stack = createStackNavigator();
  
    return (
      <MainLayout>
        <NavigationContainer>
          <SafeAreaView>
              <Button title="About" onPress={() => navigation.navigate('About')} />
              <ToDoList tasks={tasks}/>
              <ToDoForm/>
          </SafeAreaView>
        </NavigationContainer>
      </MainLayout>
    );  
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default HomeScreen;

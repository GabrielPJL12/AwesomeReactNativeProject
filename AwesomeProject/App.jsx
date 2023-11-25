"use strict";

/**
 * My To Do List App
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
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
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const Stack = createStackNavigator();

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <NavigationContainer>
      <SafeAreaView>
      <ToDoList tasks={tasks}/>
<<<<<<< HEAD
      <ToDoForm/>
      </SafeAreaView>
    </NavigationContainer>
    
=======
      <ToDoForm addTask={addTask}/>
    </SafeAreaView>
>>>>>>> a03cc4b79854d6068d66fd7f8097ff44c82715db
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

export default App;

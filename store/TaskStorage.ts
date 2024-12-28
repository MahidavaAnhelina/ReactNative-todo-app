import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types/task';
import { INITIAL_TASKS } from './InitialTasks';

// Key for AsyncStorage
const TASKS_KEY = 'tasks';

// 🛠️ Initialize Tasks
export const initializeTasks = async (): Promise<void> => {
  try {
    const existingTasks = await AsyncStorage.getItem(TASKS_KEY);
    if (!existingTasks) {
      await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(INITIAL_TASKS));
      console.log('Initialized tasks with default values.');
    }
  } catch (error) {
    console.error('Failed to initialize tasks:', error);
  }
};

// 📝 Save a new task
export const saveTask = async (task: Omit<Task, 'id'>): Promise<void> => {
  try {
    const existingTasks: Task[] = JSON.parse((await AsyncStorage.getItem(TASKS_KEY)) || '[]');
    const newTask: Task = {
      id: Date.now().toString(), // Unique ID for the task
      ...task,
    };
    existingTasks.push(newTask);
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(existingTasks));
  } catch (error) {
    console.error('Failed to save task:', error);
    throw error;
  }
};

// 📋 Get all tasks
export const getTasks = async (): Promise<Task[]> => {
  try {
    const tasks = await AsyncStorage.getItem(TASKS_KEY);
    return tasks ? JSON.parse(tasks) as Task[] : [];
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
    return [];
  }
};

// 🗑️ Delete a task
export const deleteTask = async (taskId: string): Promise<void> => {
  try {
    const tasks = await getTasks();
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks));
  } catch (error) {
    console.error('Failed to delete task:', error);
    throw error;
  }
};

// ✏️ Update a task
export const updateTask = async (updatedTask: Task): Promise<void> => {
  try {
    const tasks = await getTasks();
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks));
  } catch (error) {
    console.error('Failed to update task:', error);
    throw error;
  }
};

// 🧹 Clear all tasks
export const clearTasks = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(TASKS_KEY);
  } catch (error) {
    console.error('Failed to clear tasks:', error);
    throw error;
  }
};

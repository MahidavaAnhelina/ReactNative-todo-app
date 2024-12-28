import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { getTasks, initializeTasks } from '@/store/TaskStorage';
import { useEffect, useState } from 'react';
import { Task } from '@/types/task';

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const storedTasks = await getTasks();
    setTasks(storedTasks);
  };

  useEffect(() => {
    const loadData = async () => {
      await initializeTasks();
      loadTasks();
    };
    
    loadData();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

    {tasks.map((item) => (
      <ThemedView key={item.id} style={styles.taskItem}>
        <ThemedText>📌 {item.title} ({item.category})</ThemedText>
        <ThemedText>📅 {item.date} ⏰ {item.time}</ThemedText>
        <ThemedText>📝 {item.notes}</ThemedText>
        <ThemedText>📝 {item.status}</ThemedText>
      </ThemedView>
    ))}

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  taskItem: { marginTop: 10, borderBottomWidth: 1, paddingBottom: 5 },
});

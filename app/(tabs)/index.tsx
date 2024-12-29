import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { getTasks, initializeTasks } from '@/store/TaskStorage';
import { useEffect, useMemo, useState } from 'react';
import { Status, Task } from '@/types/task';

import { format } from 'date-fns';
import ActiveTasksBlock from '@/components/ActiveTasksBlock';

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

  const filteredTasksDone = useMemo(() => tasks.filter(({status}) => status === Status.DONE), [tasks]);
  const filteredTasksOthers = useMemo(() => tasks.filter(({status}) => status !== Status.DONE), [tasks]);
  

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4A3780', dark: '#4A3780' }}
      headerImage={
        <Image
          source={require('@/assets/images/tasksListLogo.png')}
          style={styles.headerLogo}
        />
      }
      customContentStyles={styles.customContent}
      pageTitle={(
        <ThemedView style={styles.pageTitleContainer}>
          <ThemedText type="defaultSemiBold"
                      lightColor="white"
                      style={styles.pageSubTitle}
          >
            {format(new Date(), 'MMMM dd, yyyy')}
            </ThemedText>
          <ThemedText type="title"
                      lightColor="white"
                      style={styles.pageTitle}
          >
            My Todo List
          </ThemedText>
        </ThemedView>
      )}
    >

    <ActiveTasksBlock tasks={filteredTasksOthers}/>

    {/* TODO: add tasks in Done status */}

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
  pageTitleContainer: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'transparent',
    textAlign: 'center',
    left: 0,
    right: 0
  },
  headerLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  pageTitle: {
    textAlign: 'center',
    marginTop: 50
  },
  pageSubTitle: {
    textAlign: 'center',
    marginTop: 50
  },
  taskItem: { marginTop: 10, borderBottomWidth: 1, paddingBottom: 5 },
  customContent: {
    overflow: 'visible',
    backgroundColor: '#F1F5F9'
  }
});

import { FC } from "react";
import { StyleSheet } from 'react-native';
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Task } from "@/types/task";

interface Props {
    tasks: Task[];
}

const ActiveTasksBlock: FC<Props> = ({ tasks }) => {
    return (
        <ThemedView style={styles.activeTasksBlock}>
            {tasks.map((item) => (
                  <ThemedView key={item.id} style={styles.taskItem}>
                    <ThemedText>📌 {item.title} ({item.category})</ThemedText>
                    <ThemedText>📅 {item.date} ⏰ {item.time}</ThemedText>
                    <ThemedText>📝 {item.notes}</ThemedText>
                    <ThemedText>📝 {item.status}</ThemedText>
                  </ThemedView>
                ))}
        </ThemedView>
    );
};

export default ActiveTasksBlock;


const styles = StyleSheet.create({
  activeTasksBlock: {
    marginTop: -80,
    borderRadius: 16,
    padding: 16
  },
  taskItem: { marginTop: 10, borderBottomWidth: 1, paddingBottom: 5 },
});

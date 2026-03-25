import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getTasks, saveTasks } from '../utils/storage';
import { cancelTaskReminder } from '../utils/notifications';
import TaskCard from '../components/TaskCard';

export default function TaskScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getTasks().then(setTasks);
    }, [])
  );

  const toggleDone = async (id) => {
    const updated = tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
    setTasks(updated);
    await saveTasks(updated);
  };

  const deleteTask = (id) => {
    Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await cancelTaskReminder(id);
          const updated = tasks.filter((t) => t.id !== id);
          setTasks(updated);
          await saveTasks(updated);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>My Tasks</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddEditTask', { tasks, setTasks })}
        >
          <Text style={styles.addButtonText}>+ Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onToggle={() => toggleDone(item.id)}
            onEdit={() => navigation.navigate('AddEditTask', { task: item, tasks, setTasks })}
            onDelete={() => deleteTask(item.id)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No tasks yet. Tap + Add to get started.</Text>
          </View>
        }
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
  },
  addButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  list: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  empty: {
    marginTop: 80,
    alignItems: 'center',
  },
  emptyText: {
    color: '#9CA3AF',
    fontSize: 15,
  },
});
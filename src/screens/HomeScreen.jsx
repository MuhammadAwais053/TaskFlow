import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getTasks } from '../utils/storage';
import StatsCard from '../components/StatsCard';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getTasks().then(setTasks);
    }, [])
  );

  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  const pending = total - done;

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.date}>{today}</Text>
      <Text style={styles.heading}>Good to see you 👋</Text>
      <Text style={styles.subheading}>Here's your task overview</Text>

      <View style={styles.statsRow}>
        <StatsCard label="Total" value={total} color="#4F46E5" />
        <StatsCard label="Done" value={done} color="#10B981" />
        <StatsCard label="Pending" value={pending} color="#F59E0B" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: 24,
  },
  date: {
    fontSize: 13,
    color: '#9CA3AF',
    marginBottom: 4,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
  },
  subheading: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
    marginBottom: 32,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
});
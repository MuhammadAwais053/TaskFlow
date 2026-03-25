import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskCard({ task, onToggle, onEdit, onDelete }) {
  const due = new Date(task.dueDate).toDateString();

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.checkbox} onPress={onToggle}>
        <View style={[styles.checkboxInner, task.done && styles.checkboxDone]} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={[styles.title, task.done && styles.titleDone]}>{task.title}</Text>
        {task.description ? (
          <Text style={styles.description} numberOfLines={2}>{task.description}</Text>
        ) : null}
        <Text style={styles.due}>{due}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={onEdit} style={styles.actionButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.actionButton}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  checkbox: {
    marginRight: 12,
    marginTop: 2,
  },
  checkboxInner: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#4F46E5',
  },
  checkboxDone: {
    backgroundColor: '#4F46E5',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  titleDone: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
  description: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 6,
    lineHeight: 18,
  },
  due: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  actions: {
    gap: 8,
    alignItems: 'flex-end',
  },
  actionButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  editText: {
    fontSize: 13,
    color: '#4F46E5',
    fontWeight: '500',
  },
  deleteText: {
    fontSize: 13,
    color: '#EF4444',
    fontWeight: '500',
  },
});
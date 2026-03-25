import notifee, { TriggerType, AndroidImportance } from '@notifee/react-native';

const CHANNEL_ID = 'taskflow_channel';

const createChannel = async () => {
  await notifee.createChannel({
    id: CHANNEL_ID,
    name: 'TaskFlow Notifications',
    importance: AndroidImportance.HIGH,
  });
};

export const notifyTaskAdded = async (taskTitle) => {
  await createChannel();
  await notifee.displayNotification({
    title: 'Task Added',
    body: `"${taskTitle}" has been added to your list.`,
    android: { channelId: CHANNEL_ID },
  });
};

export const scheduleTaskReminder = async (task) => {
  if (!task.dueDate) return;

  const dueDate = new Date(task.dueDate);
  const reminderDate = new Date(dueDate.getTime() - 24 * 60 * 60 * 1000);

  if (reminderDate <= new Date()) return;

  await createChannel();
  await notifee.createTriggerNotification(
    {
      id: task.id,
      title: 'Task Due Tomorrow',
      body: `"${task.title}" is due tomorrow.`,
      android: { channelId: CHANNEL_ID },
    },
    {
      type: TriggerType.TIMESTAMP,
      timestamp: reminderDate.getTime(),
    }
  );
};

export const cancelTaskReminder = async (taskId) => {
  await notifee.cancelNotification(taskId);
};
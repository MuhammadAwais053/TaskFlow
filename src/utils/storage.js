import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = '@taskflow_tasks';
const ONBOARDING_KEY = '@taskflow_onboarded';

export const getTasks = async () => {
  const data = await AsyncStorage.getItem(TASKS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveTasks = async (tasks) => {
  await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

export const hasOnboarded = async () => {
  const value = await AsyncStorage.getItem(ONBOARDING_KEY);
  return value === 'true';
};

export const setOnboarded = async () => {
  await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
};
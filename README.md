# TaskFlow

A clean, production-level task management mobile application built with React Native CLI.

## Features

- Onboarding flow shown only once using AsyncStorage
- Home dashboard with live task stats (Total, Done, Pending)
- Full CRUD — Create, Read, Update, Delete tasks
- Task fields: Title, Description, Due Date
- Instant push notification on task creation
- Scheduled reminder notification one day before due date
- Local data persistence with AsyncStorage
- Bottom tab navigation (Home & Tasks)

## Tech Stack

| Technology | Purpose |
|---|---|
| React Native CLI | Core framework |
| React Navigation (Stack + Bottom Tabs) | Navigation |
| AsyncStorage | Local data persistence |
| Notifee | Push & scheduled notifications |
| React Native DateTimePicker | Due date selection |
| React Native Gesture Handler | Navigation gestures |

## Project Structure
```
TaskFlow/
├── src/
│   ├── screens/
│   │   ├── SplashScreen.jsx
│   │   ├── OnboardingScreen.jsx
│   │   ├── HomeScreen.jsx
│   │   ├── TaskScreen.jsx
│   │   └── AddEditTaskScreen.jsx
│   ├── components/
│   │   ├── TaskCard.jsx
│   │   └── StatsCard.jsx
│   ├── navigation/
│   │   ├── AppNavigator.jsx
│   │   └── BottomTabNavigator.jsx
│   └── utils/
│       ├── storage.js
│       └── notifications.js
├── assets/
│   └── images/
├── App.jsx
```

## Getting Started

### Prerequisites

- Node.js >= 18
- React Native CLI
- Android Studio / Xcode

### Installation
```bash
git clone https://github.com/MuhammadAwais053/TaskFlow.git
cd TaskFlow
npm install
cd ios && pod install && cd ..
```

### Run on Android
```bash
npx react-native run-android
```

### Run on iOS
```bash
npx react-native run-ios
```

## Concepts Covered

- Stack & Bottom Tab Navigation
- useState for local state management
- Props drilling pattern
- AsyncStorage for persistence
- FlatList for performant list rendering
- CRUD operations
- Local push & scheduled notifications
- Component-based architecture

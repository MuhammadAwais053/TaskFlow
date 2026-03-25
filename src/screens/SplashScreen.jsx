import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation, route }) {
  const initialRoute = route?.params?.initialRoute ?? 'Onboarding';

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(initialRoute);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.tagline}>Stay organized. Get things done.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 16,
  },
  tagline: {
    fontSize: 14,
    color: '#C7D2FE',
  },
});
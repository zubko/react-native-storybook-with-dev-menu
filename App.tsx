import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MyButton} from './components/Button/Button';

export default () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>Application</Text>
        <MyButton text="Hello world!" color="purple" onPress={() => {}} />
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 16,
    gap: 16,
    alignItems: 'center',
  },
});

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import Button from '@components/Button/button';

export default () => (
  <SafeAreaProvider>
    <SafeAreaView>
      <View>
        <Text className="text-primary">Application</Text>
        <Button label="test" />
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
);

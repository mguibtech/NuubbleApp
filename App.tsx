import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';
function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset='headingLarge'>Testando app</Text>
      <Text preset='headingLarge'>Testando app</Text>
      <Text preset="paragraphMedium" italic>Testando com font customizada</Text>
    </SafeAreaView>
  );
}

export default App;
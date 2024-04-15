import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';
function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset='headingLarge'>Testando app</Text>
      <Text preset='headingLarge' style={{ fontFamily: "Satoshi-Black" }}>Testando app</Text>

      <Text preset='headingLarge' style={{ fontFamily: "ClashDisplay-Bold" }}>Testando com font customizada</Text>

    </SafeAreaView>
  );
}

export default App;

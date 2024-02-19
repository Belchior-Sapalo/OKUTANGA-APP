import { NavigationContainer } from '@react-navigation/native'
import DrawerRouter from './src/Components/DrawerRouts';
import {SafeAreaView} from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <DrawerRouter />
    </NavigationContainer>
    </SafeAreaView>
  );
}



import { NavigationContainer } from '@react-navigation/native'
import DrawerRouter from './src/Components/DrawerRouts';
import {SafeAreaView} from 'react-native'
import { ThemeProvider } from './src/Contexts/ThemeContext';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <ThemeProvider>
    <NavigationContainer>
      <DrawerRouter />
    </NavigationContainer>
    </ThemeProvider>
    </SafeAreaView>
  );
}



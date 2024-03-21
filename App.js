import { NavigationContainer } from '@react-navigation/native'
import DrawerRouter from './src/Components/DrawerRouts';
import {SafeAreaView} from 'react-native'
import { ThemeProvider } from './src/Contexts/ThemeContext';
import { AuthProvider } from './src/Contexts/AuthContext';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider>
        <AuthProvider>
          <NavigationContainer>
            <DrawerRouter />
          </NavigationContainer>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
}



import { NavigationContainer } from '@react-navigation/native'
import DrawerRouter from './src/Components/DrawerRouts';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerRouter />
    </NavigationContainer>
  );
}

/**
 * --primary-color:#139FCB;
    --secondary-color:#00A896;
    --accen-color:#FF6B35;
    --second-color:#004080;
    --natural-color: #EAEAEA;
    --dark-color:#0d0d06;
 */
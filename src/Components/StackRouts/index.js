import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../../Screens/Home'
import Abecedario from '../../Screens/Abecedario'
import Gramatica from '../../Screens/Gramatica'
import Historia from '../../Screens/Historia'
import Quiz from '../../Screens/Quiz'

const Stack = createNativeStackNavigator()

export default function StackRouter(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitle: ''
            }}
        >
            <Stack.Screen name='Main' component={Home} options={{headerShown: false}} />
            <Stack.Screen name='Abecedario'component={Abecedario} options={{headerTitle: 'Abecedário'}} />
            <Stack.Screen name='Gramatica'component={Gramatica} options={{headerTitle: 'Gramática'}} />
            <Stack.Screen name='Historia'component={Historia} options={{headerTitle: 'História'}} />
            <Stack.Screen name='Quiz'component={Quiz} options={{headerTitle: 'Quiz'}} />
        </Stack.Navigator>
    )
}
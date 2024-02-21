import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../../Screens/Home'
import Dicionario from '../../Screens/Dicionario'
import Alfabeto from '../../Screens/Alfabeto'
import Tradutor from '../../Screens/Tradutor'
import SobreLingua from '../../Screens/SobreLingua'
import PainelAdm from '../../Screens/PainelAdm/' 

const Stack = createNativeStackNavigator()

export default function StackRouter(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitle: ''
            }}
        >
            <Stack.Screen name='Main' component={Home} options={{headerShown: false}} />
            <Stack.Screen name='Dicionario'component={Dicionario} options={{headerTitle: 'Dicionário', headerShown: false}} />
            <Stack.Screen name='Alfabeto'component={Alfabeto} options={{headerTitle: 'Alfabeto'}} />
            <Stack.Screen name='Tradutor'component={Tradutor} options={{headerTitle: 'Tradutor'}} />
            <Stack.Screen name='Sobre_a_lingua'component={SobreLingua} options={{headerTitle: 'Sobre a língua'}} />
            <Stack.Screen name='PainelAdm'component={PainelAdm} options={{headerTitle: 'Painel do Administrador'}} />
        </Stack.Navigator>
    )
}
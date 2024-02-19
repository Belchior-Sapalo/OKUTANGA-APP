import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
    FontAwesome,
    MaterialCommunityIcons,
    AntDesign,
    MaterialIcons,
    FontAwesome5
} from '@expo/vector-icons'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Button,
    StatusBar
} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Configuracoes from '../../Screens/Configuracoes';
import Tradutor from '../../Screens/Tradutor';
import AppLogo from '../AppLogo';
import Contactar from '../../Screens/Contactar';
import Adm from '../../Screens/AdmForm';
import StackRouter from '../StackRouts';
import {detalhes} from '../Cores/index'

const MenuToggler = ()=>{
    const navigation = useNavigation();

    return(
        <View style={styles.togglerContainer}>
            <TouchableOpacity
                onPress={()=> navigation.toggleDrawer()}
                activeOpacity={1}
            >
                <FontAwesome name='bars' size={30} color={detalhes}/>
            </TouchableOpacity>
        </View>
    )
}

const Logo = ()=>{
    return(
        <AppLogo sizeText={20} color={detalhes}/>
    )
}

const Drawer = createDrawerNavigator();

export default function DrawerRouter(){
    return(
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#FFFF',
                },
                headerTitleStyle: {
                    fontSize: 20
                },
                headerRight: Logo,
                headerLeft: (props)=> <MenuToggler {...props} />,
                drawerStyle: {
                },
                drawerLabelStyle:{
                    fontSize: 18,
                },
                drawerItemStyle: {
                    borderBottomColor: '#eaeaea',
                    borderBottomWidth: 1,
                },
                drawerActiveBackgroundColor: '#eaeaea',
                drawerActiveTintColor: detalhes
            }}
        >
            <Drawer.Screen name='Home'component={StackRouter}
                options={
                    {
                        headerTitle: '',
                        drawerIcon: ({focused, color})=>(
                            <FontAwesome 
                                name='home'
                                color={focused ? detalhes: color}
                                size={25}
                            />
                        )
                    }
                }
            />
            <Drawer.Screen 
                name='Contactar'
                component={Contactar}
                options={
                    {
                        headerTitle: '',
                        drawerIcon: ({focused, size, color})=>(
                            <FontAwesome 
                                name='phone'
                                color={focused ? detalhes: color}  
                                size={25}
                            />
                        )
                    }
                }
            />
            <Drawer.Screen 
                name='Definições'
                component={Configuracoes}
                options={
                    {
                        headerTitle: '',
                        drawerIcon: ({focused, size, color})=>(
                            <FontAwesome 
                                name='gear'
                                color={focused ? detalhes: color}  
                                size={25}
                            />
                        )
                    }
                }
            />
            <Drawer.Screen 
                name='Admistrador'
                component={Adm}
                options={
                    {
                        headerTitle: '',
                        drawerIcon: ({focused, size, color})=>(
                            <MaterialIcons 
                                name='admin-panel-settings'
                                color={focused ? detalhes: color}  
                                size={25}
                            />
                        )
                    }
                }
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    togglerContainer: {
        flexDirection: 'row',
        padding: 10,
        marginStart: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
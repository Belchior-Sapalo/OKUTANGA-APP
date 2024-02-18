import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
    FontAwesome,
    MaterialCommunityIcons,
    AntDesign,
    MaterialIcons
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
import Home from '../../Screens/Home';
import Pesquisa from '../../Screens/Pesquisa';
import Configuracoes from '../../Screens/Configuracoes';
import Tradutor from '../../Screens/Tradutor';
import AppLogo from '../AppLogo';
import Contactar from '../../Screens/Contactar';
import Adm from '../../Screens/AdmForm';

const MenuToggler = ()=>{
    const navigation = useNavigation();

    return(
        <View style={styles.togglerContainer}>
            <TouchableOpacity
                onPress={()=> navigation.toggleDrawer()}
                activeOpacity={1}
            >
                <FontAwesome name='bars' size={30} color='#DF6E1A'/>
            </TouchableOpacity>
        </View>
    )
}

const Logo = ()=>{
    return(
        <AppLogo sizeText={20}/>
    )
}

const Drawer = createDrawerNavigator();

export default function DrawerRouter(){
    return(
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#EDF0EF',
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
                drawerActiveTintColor: '#DF6E1A'
            }}
        >
            <Drawer.Screen name='Home'component={Home}
                options={
                    {
                        headerTitle: '',
                        drawerIcon: ({focused, color})=>(
                            <FontAwesome 
                                name='home'
                                color={focused ? '#DF6E1A': color}
                                size={25}
                            />
                        )
                    }
                }
            />
            <Drawer.Screen 
                name='Tradutor'
                component={Tradutor}
                options={
                    {
                        headerTitle: '',
                        drawerIcon: ({focused, color})=>(
                            <MaterialCommunityIcons 
                                name='translate'
                                color={focused ? '#DF6E1A': color}  
                                size={25}
                            />
                        )
                    }
                }
            />
            <Drawer.Screen 
                name='Pesquisa'
                component={Pesquisa}
                options={
                    {
                        headerTitle: '',
                        drawerIcon: ({focused, size, color})=>(
                            <FontAwesome 
                                name='search'
                                color={focused ? '#DF6E1A': color}  
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
                                color={focused ? '#DF6E1A': color}  
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
                                color={focused ? '#DF6E1A': color}  
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
                                color={focused ? '#DF6E1A': color}  
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
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
import AppLogo from '../AppLogo';
import Contactar from '../../Screens/Contactar';
import Adm from '../../Screens/AdmForm';
import StackRouter from '../StackRouts';
import ThemeContext from '../../Contexts/ThemeContext';
import {useContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import PainelAdm from '../../Screens/PainelAdm';
import AuthContext from '../../Contexts/AuthContext';


const MenuToggler = ()=>{
    const { temaActual } = useContext(ThemeContext)
    const navigation = useNavigation();

    return(
        <View style={styles.togglerContainer}>
            <StatusBar 
                barStyle={temaActual.statusBar_content_color}
                backgroundColor={temaActual.header_color}
            />
            <TouchableOpacity
                onPress={()=> navigation.toggleDrawer()}
                activeOpacity={1}
            >
                <FontAwesome name='bars' size={30} color={temaActual.detalhes_color}/>
            </TouchableOpacity>
        </View>
    )
}

const Logo = ()=>{
    return(
        <AppLogo/>
    )
}

const Drawer = createDrawerNavigator();

export default function DrawerRouter(){
    const {token} = useContext(AuthContext)
    const { tema, mudarClaro, mudarEscuro, temaActual } = useContext(ThemeContext)
    return(
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: temaActual.header_color,
                },
                headerTitleStyle: {
                    fontSize: 20
                },
                headerRight: Logo,
                headerLeft: (props)=> <MenuToggler {...props} />,
                drawerStyle: {
                    backgroundColor: temaActual.drawer_color
                },
                drawerLabelStyle:{
                    fontSize: 18,
                    color: temaActual.text_color
                },
                drawerItemStyle: {
                    borderBottomColor: temaActual.border_color,
                    borderBottomWidth: 1,
                },
                drawerActiveBackgroundColor: temaActual.active_link_color,
                drawerActiveTintColor: temaActual.icon_link_color_active
            }}
        >
            <Drawer.Screen name='Home'component={StackRouter}
                options={
                    {
                        headerTitle: '',
                        drawerIcon: ({focused, color})=>(
                            <FontAwesome 
                                name='home'
                                color={focused ? temaActual.icon_link_color_active: temaActual.icons_color}
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
                                color={focused ? temaActual.icon_link_color_active: temaActual.icons_color}  
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
                                color={focused ? temaActual.icon_link_color_active: temaActual.icons_color}  
                                size={25}
                            />
                        )
                    }
                }
            />
            <Drawer.Screen 
                name='Administrador'
                component={token? PainelAdm: Adm}
                options={
                    {
                        headerTitle: '',
                        drawerIcon: ({focused, size, color})=>(
                            <MaterialIcons 
                                name='admin-panel-settings'
                                color={focused ? temaActual.icon_link_color_active: temaActual.icons_color}  
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
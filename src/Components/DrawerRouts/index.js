import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
    FontAwesome,
    MaterialCommunityIcons,
    AntDesign,
} from '@expo/vector-icons'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Button
} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Home from '../../Screens/Home';
import Pesquisa from '../../Screens/Pesquisa';
import Configuracoes from '../../Screens/Configuracoes';
import Tradutor from '../../Screens/Tradutor';
import AppLogo from '../AppLogo';
import Contactar from '../../Screens/Contactar';

const MenuToggler = ()=>{
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=> navigation.toggleDrawer()}
                activeOpacity={1}
            >
                <FontAwesome name='bars' size={25} color='#eaeaea'/>
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
                    backgroundColor: '#00A896',
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
                drawerActiveTintColor: '#00A896'
            }}
        >
            <Drawer.Screen name='Home'component={Home}
                options={
                    {
                        headerTitle: '',
                        drawerIcon: ({focused, color})=>(
                            <FontAwesome 
                                name='home'
                                color={focused ? '#00A896': color}
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
                                color={focused ? '#00A896': color}  
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
                                color={focused ? '#00A896': color}  
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
                                color={focused ? '#00A896': color}  
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
                                color={focused ? '#00A896': color}  
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
    container: {
        flexDirection: 'row',
        padding: 10,
        marginStart: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
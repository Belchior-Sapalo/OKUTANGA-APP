import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    Switch
} from 'react-native';
import {useState} from 'react'
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import {secondary_color, detalhes, primary_color} from '../../Components/Cores'

export default function Configuracoes(){
    const [lightTheme, setLightTheme] = useState(true);
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleSwitchDark = () => {
        setDarkTheme(previousState => !previousState);
        setLightTheme(false);
        alert('Modo escuro activado')
    };
    const toggleSwitchLight = () => {
        setLightTheme(previousState => !previousState);
        setDarkTheme(false);
        alert('Modo claro activado')
    };

    if(!darkTheme && !lightTheme){
        setLightTheme(true)
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.configGroup}>
                <Text style={styles.configTema}>
                    Tema
                </Text>
                <View style={styles.configOptionsContainer}>
                    {/* <View style={styles.configOption} activeOpacity={1}>
                        <View style={styles.configOptionInfo}>
                            <MaterialCommunityIcons name='theme-light-dark' size={30}/>

                            <Text style={styles.configOptionText}>
                                Automático
                            </Text>
                        </View>

                        <Switch 
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            onValueChange={toggleSwitch}
                            value={activo}
                        />
                    </View> */}
                    <View style={styles.configOption} activeOpacity={1}>
                        <View style={styles.configOptionInfo}>
                            <MaterialIcons name='light-mode' size={30}/>

                            <Text style={styles.configOptionText}>
                                Claro
                            </Text>
                        </View>
                        <Switch 
                            trackColor={{ false: "#767577", true: "#027333" }}
                            thumbColor={lightTheme ? detalhes : "#FFFF"}
                            onValueChange={toggleSwitchLight}
                            value={lightTheme}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} 
                        />
                    </View>
                    <View style={[styles.configOption, {borderBottomWidth: 0}]} activeOpacity={1}>
                        <View style={styles.configOptionInfo}>
                            <MaterialIcons name='dark-mode' size={30}/>

                            <Text style={styles.configOptionText}>
                                Escuro
                            </Text>
                        </View>

                        <Switch 
                            trackColor={{ false: "#767577", true: "#027333" }} 
                            thumbColor={darkTheme ? detalhes : "#FFFF"}
                            onValueChange={toggleSwitchDark}
                            value={darkTheme}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} 
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    configGroup: {
        
    },
    configTema: {
        fontSize: 18,
    },
    configOptionsContainer: {
        borderRadius: 20,
        backgroundColor: secondary_color,
        marginVertical: 10
    },
    configOption: {
        padding: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBlockColor: primary_color
        
    },
    configOptionInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    configOptionText: {
        marginHorizontal: 20
    },
    configSelect: {
        width: 20,
        height: 20,
        backgroundColor: primary_color,
        borderRadius: 20/2
    }
})
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    SafeAreaView
} from 'react-native';
import {primary_color, dark_color} from '../../Components/Cores/index'

export default function Alfabeto(){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <SafeAreaView style={styles.letras}>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            A-a
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            B-b
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            C-c
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            D-d
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            E-e
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            F-f
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            G-g
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            H-h
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            I-i
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            J-j
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            K-k
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            L-l
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            M-m
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            N-n
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            O-o
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            P-p
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            Q-q
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            R-r
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            S-s
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            T-t
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            U-u
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            V-v
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            W-w
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            X-x
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            Y-y
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                    <View style={styles.letra}>
                        <Text style={styles.port}>
                            Z-z
                        </Text>
                        <Text style={styles.umb}>
                            Umb
                        </Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    letras: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    letra: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 80/2,
        backgroundColor: primary_color,
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 10,
    },
    port: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    umb: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})
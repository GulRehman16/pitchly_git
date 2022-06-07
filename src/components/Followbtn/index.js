import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Appearance,
    TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
const Followbtn = ({
    Image1,
    BoldText,
    LighterText,
    User,
    followbutton,
    follow,
    unfollow,
    Location,
    borderWidth,
    color,
    color1,
    color2,
    color3,
    color4
}) => {

    const [state, setState] = useState(follow);
    const [colorState, setColorsate] = useState(true);

    const Click = () => {
        setState(unfollow);
        setColorsate(color)

    }
    return (
        <View>
            {User && (
                <View style={styles.rowstyle}>
                    <View style={styles.texts}>
                        <View style={styles.Pictures}>
                            <Image
                                source={Image1}
                                resizeMode="contain"
                                style={{
                                    width: '100%', height: '100%',
                                    borderRadius: 100,
                                }}
                            />
                        </View>
                        <View style={styles.textes}>
                            <Text style={styles.txt1}>{BoldText}</Text>
                            <Text style={{ fontSize: 12, marginTop: -4, }}>{LighterText}</Text>
                        </View>
                    </View>


                    <TouchableOpacity onPress={() => { Click(!state) }}

                        style={{
                            borderWidth: borderWidth,
                            width: '26%', height: 30, alignSelf: 'center',
                            backgroundColor: colorState === true ? color1 : color2,
                            borderRadius: 3, justifyContent: 'center'
                        }}>
                        <Text style={{ color: colorState === true ? color3 : color4, textAlign: 'center', }} >{state}</Text>
                    </TouchableOpacity>
                </View>
            )}

        </View>
    )
}
export { Followbtn }

const styles = StyleSheet.create({

    textbox: {
        width: '100%', alignSelf: 'center', marginVertical: 10,
    },
    txt1: {
        marginVertical: 10,
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16
    },
    txt2: {
        marginVertical: 5,
        color: '#000',
        fontSize: 12
    },
    rowstyle: {
        width: '95%', alignSelf: 'center',
        marginTop: 5,
        padding: 4,
        paddingVertical: 10,
        // borderBottomWidth: 0.70,
        // borderBottomColor: '#aaa',
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    texts: {

        flexDirection: 'row',
        width: '74%'
    },
    btns: {
        width: 91, height: 25,
    },
    Pictures: {
        width: 38, height: 38,

    },
    textes: {
        justifyContent: 'center',
        marginLeft: 7,
        marginTop: -7
    },





})
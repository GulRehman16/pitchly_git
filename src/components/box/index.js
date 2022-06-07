import {
    StyleSheet, Text, View,
    SafeAreaView, ScrollView, Image,
    FlatList, TouchableHighlight, TouchableOpacity,

} from 'react-native'
import React, { useState } from 'react'
import Swipeable from 'react-native-swipeable';

import { Icon } from 'native-base';
const Box = ({
    name,
    textmessage,
    Nowtext,
    messagenumber,
    Image1,
    Press,
    SwipeableText
}) => {
    const [state, setState] = useState(true);
    const rightButtons = [
        <TouchableOpacity style={{
            width: 110,
            height: 80,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: 'red',
            zIndex: 2,
            marginTop: -10, justifyContent: 'center', marginLeft: 22
        }}>
            <Icon
                type="AntDesign"
                name="delete"
                style={{ color: 'white', fontSize: 26, marginLeft: 36 }}
            />
        </TouchableOpacity>
    ];
    // const deleteItem = () => {
    //     alert('delete Items')
    // }
    return (
        <>
            <View style={styles.cardbox}>
                <View style={{ marginVertical: 20 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{
                            width: '20%',
                            flexDirection: 'row',
                            // justifyContent: 'space-between'
                        }}>
                            <View style={styles.ImgView}>
                                <Image
                                    source={Image1}
                                    style={{ width: 60, height: 60, borderRadius: 30 }}
                                />
                            </View>
                        </View>
                        <View style={{ width: '40%', marginLeft: 15, marginTop: 10, }}>
                            <Text style={styles.vani}>{name}</Text>
                            <Text style={styles.othertxt}>{textmessage}</Text>
                        </View>
                        <View style={{ width: '30%' }}>
                            {SwipeableText && (
                                <Swipeable
                                    rightButtonWidth={250}
                                    leftActionActivationDistan={10}
                                    rightButtons={rightButtons ? rightButtons : LeftButtons}>
                                    <TouchableOpacity onPress={Press} style={{
                                        marginTop: 10,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Text style={styles.just_now_text}>{Nowtext}</Text>
                                        <View style={{
                                            width: 20, height: 20,
                                            borderRadius: 20,
                                            backgroundColor: 'blue',
                                            marginVertical: 4,
                                        }}>
                                            <Text style={{ color: '#ffff', textAlign: 'center' }}>
                                                {messagenumber}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Swipeable>
                            )}
                        </View>
                    </View>
                </View>
            </View>

        </>
    )
}
export { Box }

const styles = StyleSheet.create({
    Container: {
        flex: 1,


    },

    cardbox: {

        width: '100%',
        height: 80,
        zIndex: 0,
        marginVertical: 10,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        elevation: 4
    },
    ImgView: {
        justifyContent: 'space-evenly',
        width: 60, height: 60,
        borderRadius: 30,
        backgroundColor: 'grey',
        marginLeft: 20
    },
    vani: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    just_now_text: {
        color: 'blue',
        fontSize: 16

    },
    btn: {
        //  width: 60,
        // padding: 10,
        // backgroundColor: 'red',

        color: '#fff'


    }



})
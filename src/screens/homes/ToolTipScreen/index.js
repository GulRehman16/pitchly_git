import {
    StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image,
    FlatList, ImageBackground
} from 'react-native'
import React, { useState } from 'react'
import { Box, Header, Row } from '../../../components'
import Icon from 'react-native-vector-icons/Entypo';
import { Images } from '../../../constants';
import Swipeable from 'react-native-swipeable';
import { Item } from 'native-base';
import { Tooltip, Overlay } from 'react-native-elements';
import ChatScreen1 from '../chatscreen1';
import { StylesContext } from '@material-ui/styles';




const ToolTipScreen = ({ Open }) => {



    return (
        <ImageBackground
            style={styles.imageContainer}
            source={Images.Pictures.appBg}>
            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.Body}>

                    <Tooltip containerStyle={{
                        width: 180,
                        height: 300,
                        shadowColor: "#000",

                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,
                        elevation: 6,
                        flexDirection: 'row'
                    }} backgroundColor='#fff'
                        withPointer={true}
                        toggleOnPress={true}
                        onOpen={Open}
                        popover={
                            <Text>hjdshjdfjhdfhjdfhjfd</Text>}>

                    </Tooltip>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default ToolTipScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Body: {
        backgroundColorL: 'purple',
        width: '90%',
        // height: '100%',
        alignSelf: 'center'
    },
    message: {
        fontWeight: '700',
        fontSize: 18,
        color: '#000',
        marginVertical: 10
    },
    horizental: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    box: {
        margin: 5,
        width: 64,
        height: 70,
        borderRadius: 20,
        borderColor: 'blue',
        borderWidth: 1.25,
        // backgroundColor: 'pink'
    },
    cardbox: {

        width: '100%',
        height: 80,
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
        width: 60,
        padding: 10,
        backgroundColor: 'red',
        textAlign: 'center',
    },
    Icon: {
        width: '5%',
        alignSelf: 'center',
        marginVertical: 10
    }



})


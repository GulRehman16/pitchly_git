import {
    StyleSheet, Text, View, SafeAreaView, ScrollView, Image,
    FlatList, TouchableHighlight
} from 'react-native'
import React, { useState } from 'react'
import { Box, Header } from '../../../components'
import Icon from 'react-native-vector-icons/AntDesign';
import { Images } from '../../../constants';
import Swipeable from 'react-native-swipeable';
import { Item } from 'native-base';






const ChatScreen1 = ({ route, navigation }) => {

    const [data, setData] = useState({


        DataBox: [
            {
                Imgbox: Images.Pictures.statusImg5,
                name: 'Vani',
                textmessage: 'Ok let me see...',
                messagenumber: '2',
                Nowtext: "just now",
                Press: () => {
                    navigaton.navigate('MessageScreen'), {
                        username: 'Vani',
                        picture: Images.Pictures.statusImg5,

                    }
                }

            },
            {
                Imgbox: Images.Pictures.statusImg5,
                name: 'Vani',
                textmessage: 'Ok let me see...',
                messagenumber: '1',
                Nowtext: "just now"

            },
            {
                Imgbox: Images.Pictures.statusImg5,
                name: 'Vani',
                textmessage: 'Ok let me see...',
                messagenumber: '7',
                Nowtext: "just now"

            },
            {
                Imgbox: Images.Pictures.statusImg5,
                name: 'Vani',
                textmessage: 'Ok let me see...',
                messagenumber: '1',
                Nowtext: "just now"


            },
            {
                Imgbox: Images.Pictures.statusImg5,
                name: 'Vani',
                textmessage: 'Ok let me see...',
                messagenumber: '3',
                Nowtext: "just now"

            },
            {
                Imgbox: Images.Pictures.statusImg5,
                name: 'Vani',
                textmessage: 'Ok let me see...',
                messagenumber: '3',
                Nowtext: "just now"

            },
            {
                Imgbox: Images.Pictures.statusImg5,
                name: 'Vani',
                textmessage: 'Ok let me see...',
                messagenumber: '3',
                Nowtext: "just now"

            },
            {
                Imgbox: Images.Pictures.statusImg5,
                name: 'Vani',
                textmessage: 'Ok let me see...',
                messagenumber: '3',
                Nowtext: "just now"

            },

        ]

    })



    // const rightButtons = [

    //     <TouchableHighlight style={{
    //         width: 100, height: 50,
    //         backgroundColor: 'yellow'
    //     }}><Text style={styles.btn}>
    //             Delete</Text></TouchableHighlight>,

    // ];

    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.Body}>

                    <View style={{}}>
                        <Text style={styles.message}>Message</Text>
                    </View>
                    <FlatList
                        data={data.DataBox}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Box
                                        SwipeableText
                                        Image1={item.Imgbox}
                                        name={item.name}
                                        Nowtext={item.Nowtext}
                                        messagenumber={item.messagenumber}
                                        textmessage={item.textmessage}
                                        Press={item.Press}
                                    />
                                </View>
                            )
                        }
                        }
                    />
                </View>
            </ScrollView>
        </SafeAreaView >

    )
}

export default ChatScreen1

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
        color: '#000'
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


    }



})
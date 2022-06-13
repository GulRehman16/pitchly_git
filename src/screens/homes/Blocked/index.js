
import {
    StyleSheet,
    Text, View,
    ImageBackground,
    Image,
    ScrollView,
    StatusBar,
    Switch,
    FlatList,
    txt1,
    txt2,
} from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../../constants'
import { Followbtn, Header, } from '../../../components'

import { UserData } from '../../../components/usersdata'

const Blocked = (props) => {

    // const [state, setState] = useState('follow');

    const data = [
        {
            Image1: Images.Pictures.postImg1,
            BoldText: 'William John',
            LighterText: '@williamj',
        },
        {
            Image1: Images.Pictures.postImg1,
            BoldText: 'Daysi Mike',
            LighterText: '@dausim',
        },
        {
            Image1: Images.Pictures.postImg1,
            BoldText: 'Franklin Floss',
            LighterText: '@frankf',
        },
        {
            Image1: Images.Pictures.postImg1,
            BoldText: 'Sina samy',
            LighterText: '@sinas',
        },
        {
            Image1: Images.Pictures.postImg1,
            BoldText: 'Travor Terrance',
            LighterText: '@Trav',
        },
        {
            Image1: Images.Pictures.postImg1,
            BoldText: 'Micheal Mike',
            LighterText: '@mike',
        },
        {
            Image1: Images.Pictures.postImg1,
            BoldText: 'Nargis',
            LighterText: '@nargis',
        },

    ]

    return (
        <ImageBackground
            style={styles.imageContainer}
            source={Images.Pictures.appBg}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <StatusBar backgroundColor={'transparent'} translucent={true} />
                <View style={{}}>
                    <View style={styles.screenHeader}>
                        <Header
                            BAckButton
                            hiddinText
                            text="Blocked"
                            onPress={() => {
                                props.navigation.goBack();
                            }}
                        />
                    </View>
                    <View style={styles.screenBody}>
                        <View style={styles.whitebox}>
                            <View style={{ marginVertical: 10 }}>
                                <FlatList
                                    data={data}
                                    renderItem={({ item }) => {
                                        return (
                                            <>
                                                <View style={{}}>
                                                    <Followbtn
                                                        borderWidth={0.75}
                                                        color1="#eee"
                                                        color2="#eee"
                                                        color3="#000"
                                                        color4="#000"
                                                        User
                                                        follow="Unbolck"
                                                        unfollow="Blocked"
                                                        Image1={item.Image1}
                                                        BoldText={item.BoldText}
                                                        LighterText={item.LighterText}
                                                    />
                                                </View>
                                            </>
                                        )
                                    }}
                                />
                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </ImageBackground >
    )
}
export default Blocked

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    screenHeader: {
        width: '90%',
        height: 80,
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    headingTextView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    screenBody: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',

    },
    whitebox: {
        width: '90%',
        height: '80%',
        borderRadius: 10,
        backgroundColor: '#fff',
        alignSelf: 'center',
        elevation: 2,
    },


})  
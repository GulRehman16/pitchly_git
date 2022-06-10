
import {
    StyleSheet,
    Text, View,
    ImageBackground,
    Image,
    ScrollView,
    StatusBar,
    Switch,
    FlatList
} from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../../constants'
import { AppButton, Box, Header, Row, Switch1 } from '../../../components'
import { Item, Textarea } from 'native-base'
import { Icon } from 'react-native-elements'

const PremiumMember = ({ }) => {

    const data = [
        { text: 'Account Deactivation' },
        { text: 'Make Account Private' },
        { text: 'Notification' },
        { text: 'Change Password' },
        { text: 'Blocked Accounts' },

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
                            hiddinText
                            text="Become Premium Member"
                            onPress={() => {
                                props.navigation.goBack();
                            }}
                        />
                    </View>
                    <View style={styles.screenBody}>
                        <View style={styles.whitebox}>
                            <View style={styles.textView}>
                                <Text style={styles.texts}>
                                    Lorem ipsum ded diam nonum
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                    et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                                </Text>
                                <View style={styles.centerImage}>
                                    <Image source={Images.Icons.premium} />
                                </View>
                                <View style={{ width: '60%', alignSelf: 'center' }}>
                                    <View style={{ marginTop: -25 }}>
                                        <AppButton
                                            icon
                                            iconL
                                            iconBG="transparent"
                                            Icon iconN="camera"
                                            iconT="AntDesign"
                                            LinearColor1={'#5DF7B8'}
                                            LinearColor2={'#3109FB'}
                                            color={'white'}
                                            borderWidth={0.5}
                                            borderColor={'#707070'}
                                            backgroundColor={'#FFFFFF'}
                                            label="Upload Photo Id"
                                            onPress={() => { setState(!state) }}
                                        />
                                    </View>
                                    <View style={{ marginVertical: 25 }}>
                                        <AppButton
                                            LinearColor1={'#5DF7B8'}
                                            LinearColor2={'#3109FB'}
                                            color={'white'}
                                            borderWidth={0.5}
                                            borderColor={'#707070'}
                                            backgroundColor={'#FFFFFF'}
                                            label="Next"
                                            onPress={() => { setState(!state) }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground >
    )
}
export default PremiumMember

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    screenHeader: {
        width: '90%',
        height: 80,
        marginTop: 50,
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
    textView: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: 25

    },
    texts: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 14
    },
    centerImage: {
        alignSelf: 'center',
        marginTop: 15,
    }

})  
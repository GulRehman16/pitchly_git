import {
    StyleSheet, Text, View, ImageBackground,
    Image,
    ScrollView, StatusBar, Switch, TextInput
} from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../../constants'
import { Box, Header, AppButton } from '../../../components'
import { color } from 'react-native-elements/dist/helpers'


const ChangePassword = (props) => {
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
                            text="Change Password"
                            onPress={() => {
                                props.navigation.goBack();
                            }}
                        />
                    </View>
                    <View style={styles.screenBody}>

                        <View style={styles.inputView}>
                            <View style={styles.input}>
                                <TextInput placeholder='Current Password' />
                            </View>
                            <View style={styles.input}>
                                <TextInput placeholder='New Password' />
                            </View>
                            <View style={styles.input}>
                                <TextInput placeholder='Confirm Password' />
                            </View>

                        </View>

                        <View style={{ width: '70%', alignSelf: 'center' }}>
                            <AppButton
                                LinearColor1={'#5DF7B8'}
                                LinearColor2={'#3109FB'}
                                color={'white'}
                                borderWidth={0.5}
                                borderColor={'#707070'}
                                backgroundColor={'#FFFFFF'}
                                label="Done"
                                onPress={() =>
                                    props.navigation.replace('Homes', { screen: 'accountsettings' })
                                }
                            />
                        </View>

                    </View>

                </View>
            </ScrollView>
        </ImageBackground >
    )
}

export default ChangePassword

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
        // height: '20%',
        alignSelf: 'center',

    },
    cardbox: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: "space-between"

    },
    imageView: {
        width: 50, height: 30,

    },

    cardimg: {
        width: '100%',
        height: '100%',
    },

    inputView:
        { width: '80%', alignSelf: 'center', marginVertical: 35 },
    input: {
        backgroundColor: '#E9EBEF', paddingLeft: 6,
        borderRadius: 5, borderWidth: 0.25,
        borderColor: "#aaa", marginVertical: 10
    }


})  
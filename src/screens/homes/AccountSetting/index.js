
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
import { Box, Header, Row, Switch1 } from '../../../components'
import { Item, Textarea } from 'native-base'
import { Icon } from 'react-native-elements'

const AccountSetting = ({ }) => {

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
                            text="Account Settings"
                            onPress={() => {
                                props.navigation.goBack();
                            }}
                        />
                    </View>
                    <View style={styles.screenBody}>
                        <View style={styles.whitebox}>

                            <FlatList
                                data={data}
                                renderItem={({ item }) => {
                                    return (
                                        <>
                                            <Row Row1
                                                text={item.text}

                                            />
                                        </>
                                    )
                                }}
                            /></View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground >
    )
}
export default AccountSetting

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

})  
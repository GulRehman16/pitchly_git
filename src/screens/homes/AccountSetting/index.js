
import {
    StyleSheet,
    Text, View,
    ImageBackground,
    Image,
    ScrollView,
    StatusBar,
    Switch,
    FlatList,
    hidden, statusBarStyle, statusBarTransition

} from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../../constants'
import { Box, Header, Row, Switch1 } from '../../../components'
import { Item, Textarea } from 'native-base'
import { Icon } from 'react-native-elements'

const AccountSetting = (props) => {

    const data = [
        {
            text: 'Account Deactivation',
            press: () => { props.navigation.navigate('Accountdeactivation') }
        },
        {
            text: 'Make Account Private',
            press: () => { props.navigation.navigate('') }
        },
        {
            text: 'Notification',
            press: () => { props.navigation.navigate('notificationsettings') }
        },
        {
            text: 'Change Password',
            press: () => { props.navigation.navigate('changepassword') }
        },
        {
            text: 'Blocked Accounts',
            press: () => { props.navigation.navigate('blocked') }
        },

    ]
    return (
        <ImageBackground
            style={styles.imageContainer}
            source={Images.Pictures.appBg}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <StatusBar
                    animated={true}
                    backgroundColor="#000"
                    barStyle={statusBarStyle}
                    showHideTransition={statusBarTransition}
                    hidden={hidden} />
                <View style={{}}>
                    <View style={styles.screenHeader}>
                        <Header
                            BAckButton
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
                                                onPress={item.press}
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
        // marginTop: 20,
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
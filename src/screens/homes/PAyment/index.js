import {
    StyleSheet, Text, View, ImageBackground,
    Image,
    ScrollView, StatusBar, Switch
} from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../../constants'
import { Box, Header, AppButton, FormInput } from '../../../components'
import { Textarea } from 'native-base'

const Payment = ({ text, navigation, onSwitch }) => {

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
                            text="Get Premium"
                            onPress={() => {
                                props.navigation.goBack();
                            }}
                        />
                    </View>
                    <View style={styles.screenBody}>
                        <View style={styles.cardbox}>
                            <View style={styles.imageView}>
                                <Image source={Images.Icons.card2} style={styles.cardimg} />
                            </View>
                            <View style={styles.imageView}>
                                <Image source={Images.Icons.card1} style={styles.cardimg} />
                            </View>
                            <View style={styles.imageView}>
                                <Image source={Images.Icons.card3} style={styles.cardimg} />
                            </View>
                            <View style={styles.imageView}>
                                <Image source={Images.Icons.card4} style={styles.cardimg} />
                            </View>
                            <View style={styles.imageView}>
                                <Image source={Images.Icons.card5} style={styles.cardimg} />
                            </View>
                        </View>


                        <View style={styles.InfotextView}>
                            <Text style={styles.Infotext}>Credit Card Info</Text>

                            <View style={{ width: '90%', alignSelf: 'center' }}>
                                <View>
                                    <Text style={styles.UserName}>CARD NUMBER</Text>
                                    <FormInput placeHolder="0000 0000 0000 0000" />
                                </View>
                                <View>
                                    <Text style={styles.UserName}>CARDHOLDER NAME</Text>
                                    <FormInput placeHolder="John Doe" />
                                </View>
                                <View>
                                    <Text style={styles.UserName}>EXPIRE DATE</Text>
                                    <FormInput placeHolder="05/21" />
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.UserName}>CVV</Text>
                                    <FormInput placeHolder="123" />
                                </View>
                            </View>

                        </View>
                        <View style={{ width: '80%', alignSelf: 'center' }}>
                            <AppButton
                                LinearColor1={'#5DF7B8'}
                                LinearColor2={'#3109FB'}
                                color={'white'}
                                borderWidth={0.5}
                                borderColor={'#707070'}
                                backgroundColor={'#FFFFFF'}
                                label="Pay Now"
                                onPress={() =>
                                    props.navigation.replace('MyTabs', { screen: 'home' })
                                }
                            />
                        </View>

                    </View>

                </View>
            </ScrollView>
        </ImageBackground >
    )
}

export default Payment

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

    InfotextView: {
        marginVertical: 30,
        width: '90%',
        alignSelf: 'center'
    },
    Infotext: {
        fontSize: 18,
        color: '#000',
        fontWeight: '700'
    },
    UserName: {
        fontSize: 16, color: '#000',
        fontWeight: '400', marginVertical: 10

    },





})  
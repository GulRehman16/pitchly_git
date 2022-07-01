
import {
    StyleSheet,
    Text, View,
    ImageBackground,
    Image,
    ScrollView,
    StatusBar,
    Switch,
    FlatList,
    statusBarStyle, statusBarTransition, hidden

} from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../../constants'
import { AppButton, Box, Header, Row, Switch1 } from '../../../components'
import { Item, Textarea } from 'native-base'
import { Icon } from 'react-native-elements'

const GetFeaturedPost = ({ navigation }) => {

    const data = [
        {
            txt1: 'Talent Name',
            txt2: 'Expiry : ',
            text3: '2/2/2022',
            image1: Images.Icons.post
        },
        {
            txt1: 'Product Name',
            txt2: 'Expiry : ',
            text3: '2/2/2022',
            image1: Images.Icons.post
        },
        {
            txt1: 'Talent Name',
            txt2: 'Expiry : ',
            text3: '2/2/2022',
            image1: Images.Icons.post
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
                            text="Your Featured Posts"
                            onPress={() => {
                                navigation.goBack();
                            }}
                        />
                    </View>
                    <View style={styles.screenBody}>
                        <View style={styles.whitebox}>
                            <View style={styles.textbox}>
                                <Text style={styles.txt1}>Duration</Text>
                                <Text style={styles.txt2}>
                                    Lorem Ipsum Dolor Sit Amet
                                    , Consetetur Sadipscing Elitr,
                                    Sed Diam Nonumy Eirmod Tempor Invidunt
                                    Ut Labore Et Dolore Magna Aliquyam Erat,
                                    Sed Diam.
                                </Text>
                            </View>
                            <View style={styles.textbox}>
                                <Text style={styles.txt1}>Select You Package</Text>
                            </View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={styles.rowstyle}>
                                            <View style={{ flexDirection: 'row', width: '76%' }}>

                                                <View style={styles.imgView}>
                                                    <Image source={item.image1}
                                                        resizeMode="contain"
                                                        style={{ width: '100%', height: '100%' }} />

                                                </View>
                                                <View style={{}}>
                                                    <View style={styles.texts}>
                                                        <Text style={styles.txt1}>{item.txt1}</Text>
                                                        <View style={{ flexDirection: 'row' }}>

                                                            <Text style={{ fontSize: 16, marginTop: -4, color: '#000' }}>{item.txt2}</Text>
                                                            <Text style={{ fontSize: 10, marginTop: 1, }}>{item.text3}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{}}>

                                                <View style={styles.btns}>
                                                    <View style={{
                                                        // paddingVertical: 2,
                                                        width: '80%',
                                                    }}>
                                                        <AppButton
                                                            LinearColor1={'#5DF7B8'}
                                                            LinearColor2={'#3109FB'}
                                                            color={'white'}
                                                            borderWidth={0.5}
                                                            width={91}
                                                            height={31}
                                                            borderRadius={3}
                                                            borderColor={'#707070'}
                                                            backgroundColor={'#FFFFFF'}
                                                            label="Renew"
                                                            onPress={() =>
                                                                navigation.navigate('Homes', { screen: 'productdetails' })
                                                            }
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }}
                            />
                            <View style={{ marginVertical: 30 }}>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground >
    )
}
export default GetFeaturedPost

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    screenHeader: {
        width: '90%',
        height: 80,
        // marginTop: 10,
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
    textbox: {
        width: '90%', alignSelf: 'center', marginVertical: 10
    },
    txt1: {
        marginVertical: 5,
        fontWeight: '500',
        color: '#000',
        fontSize: 16,
        marginTop: 5,
    },
    txt2: {
        // marginVertical: 5,
        // marginTop: 5,
        color: '#000',
        fontSize: 14
    },
    texts: {
        marginLeft: 5,
    },
    rowstyle: {
        width: '90%', alignSelf: 'center',
        marginTop: 5,
        paddingVertical: 5,
        borderBottomWidth: 0.70,
        borderBottomColor: '#aaa',
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    btns: {
        width: 91, height: 30,
        // borderRadius: 10,
        marginVertical: 15
    },
    imgView: {
        width: 91,
        height: 51,
        borderRadius: 10,
    }

})  
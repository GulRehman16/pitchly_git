import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
    ImageBackground,
    StatusBar, statusBarStyle, statusBarTransition, hidden
} from 'react-native';
import { Icon, Item } from 'native-base';
import React, { useState, useEffect } from 'react';
import { Images } from '../../../constants';
import { Tip, Header, HomeHeader } from '../../../components';
const SavedStatus = ({ navigation, onPress }) => {
    const data = [
        {
            image1: Images.Pictures.Highlight2,
            date: '2 Oct',
            onPress: () => navigation.navigate('Viewstatus')
        },
        {
            image1: Images.Pictures.CarHigh,
            date: '1 Oct',
            onPress: () => navigation.navigate('Viewstatus')
        },
        {
            image1: Images.Pictures.status1,
            date: '22 Sep',
            onPress: () => navigation.navigate('Viewstatus')
        },
        {
            image1: Images.Pictures.Whitecar,
            date: '5 Sep',
            onPress: () => navigation.navigate('Viewstatus')
        },
        {
            image1: Images.Pictures.Devil,
            date: '14 Aug',
            onPress: () => navigation.navigate('Viewstatus')
        },
        {
            image1: Images.Pictures.Faram,
            date: '4 Jul',
            onPress: () => navigation.navigate('Viewstatus')
        },
        {
            image1: Images.Pictures.Friendship1,
            date: '20 Feb',
            onPress: () => navigation.navigate('Viewstatus')
        },
    ];

    return (
        <ImageBackground
            style={styles.imageContainer}
            source={Images.Pictures.homeMainBg}>
            <StatusBar
                animated={true}
                backgroundColor="#000"
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={hidden} />
            <View style={styles.screenHeader}>
                <Header
                    BAckButton
                    hiddinText
                    text="Select Photo or Video"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
            </View>
            <View style={styles.screenBody}>
                <FlatList
                    data={data}
                    numColumns={3}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.imgview}>
                                <TouchableOpacity onPress={item.onPress} style={{ width: '100%' }}>
                                    <Image
                                        source={item.image1}
                                        resizeMode="contain"
                                        style={styles.img}
                                    />
                                </TouchableOpacity>

                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: 'white',
                                        fontSize: 15,
                                        textAlign: 'center',
                                        position: 'absolute',
                                        bottom: 10,
                                        width: '100%',
                                        marginLeft: 10,
                                    }}>
                                    {item.date}
                                </Text>
                            </View>
                        );
                    }}
                />
            </View>
        </ImageBackground>
    );
};
export default SavedStatus;
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },

    screenHeader: {
        width: '90%',
        height: 80,
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    screenBody: {
        width: '98%',

        alignSelf: 'center',
    },
    maibox: {
        backgroundColor: 'pink',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    imgview: {
        width: '25%',
        height: 130,
        borderRadius: 15,
        marginLeft: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        padding: 10,
        marginLeft: 30,
        alignSelf: 'center',
    },
});
import {
    StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image,
    FlatList, ImageBackground
} from 'react-native'
import React, { useState } from 'react'
import Tooltip from 'react-native-walkthrough-tooltip';
import Icon from 'react-native-vector-icons/Entypo';
import { Images } from '../../../constants';

const ToolTipScreen = ({ onPress }) => {

    const [showTip, setShowTip] = useState(true)

    return (
        <ImageBackground
            style={styles.imageContainer}
            source={Images.Pictures.appBg}>
            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.Body}>

                    <View style={{}}>
                        <Tooltip
                            contentStyle={{

                                marginTop: 340

                            }}
                            childrenWrapperStyle={{ width: 200, height: 100, backgroundColor: 'green', marginVertical: 40 }}

                            isVisible={showTip}
                            showChildInTooltip={true}
                            content={
                                <View sty={{ marginTop: 50 }}>
                                    <View style={styles.TooltipContainer}>
                                        <TouchableOpacity
                                            onPress={() => { navigation.navigate('profile') }}
                                            style={styles.box}>
                                            <Image source={Images.Icons.add1} resizeMode="contain"
                                                style={{ width: 40, height: 40, }} />
                                            <Text>General</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => { navigation.navigate('profile') }}
                                            style={styles.box}>
                                            <Image source={Images.Icons.user1} resizeMode="contain"
                                                style={{ width: 40, height: 40 }} />
                                            <Text>Talent</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => { navigation.navigate('AddPost') }}
                                            style={styles.box}>
                                            <Image source={Images.Icons.setting1} resizeMode="contain"
                                                style={{ width: 40, height: 40 }} />
                                            <Text>Services</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => { navigation.navigate('AddPost') }}
                                            style={styles.box}>
                                            <Image source={Images.Icons.lock1} resizeMode="contain"
                                                style={{ width: 40, height: 40 }} />
                                            <Text>Products</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>}
                            onClose={() => { setShowTip(true) }}
                            placement="top" >

                        </Tooltip>
                    </View>
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
    TooltipContainer:
    {
        width: '100%',
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'flex-end'
    },
    box: {
        margin: 2,
        width: 64,
        height: 70,
        borderRadius: 20,
        borderColor: 'blue',
        borderWidth: 1.25,
        justifyContent: 'center',
        alignItems: 'center'
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

  // <TouchableOpacity onPress={onPress} >

                            //     <Text>heljhskajdjdfjd</Text>
                            // </TouchableOpacity>


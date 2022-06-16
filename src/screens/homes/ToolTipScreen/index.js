import {
    StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image,
    FlatList, ImageBackground
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Images } from '../../../constants';
import { Tip } from '../../../components';

const ToolTipScreen = ({ onPress, }) => {

    useEffect(() => {
        setShowtool(true);

    }, [showTool]);

    const [showTool, setShowtool] = useState(false);

    return (
        <ImageBackground
            style={styles.imageContainer}
            source={Images.Pictures.appBg}>
            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.Body}>
                    <View style={{}}>
                        <Tip tooltip2 onPress={showTool} text="kjdjhfkdjdsjf" />
                    </View>



                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default ToolTipScreen

const styles = StyleSheet.create({

    imageContainer: {
        flex: 1,
        justifyContent: 'center',
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

    // < TouchableOpacity onPress = { onPress } >

    //     <Text>heljhskajdjdfjd</Text>
    //                         </TouchableOpacity >


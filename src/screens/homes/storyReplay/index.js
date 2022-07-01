import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar, statusBarStyle, statusBarTransition, hidden,
    Image, FlatList
} from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'native-base';
import { Images } from '../../../constants';
import { Overlay } from 'react-native-elements';
const Storyreplay = (props) => {
    const [data, setData] = useState({
        statusData3: [




            {
                imgName: Images.Pictures.statusImg5,
                text: 'Bella',
                text1: 'just Now'

            },
            {
                imgName: Images.Pictures.statusImg1,
                text: 'John',
                text1: '8 mins'

            },
            {
                imgName: Images.Pictures.statusImg2,
                text: 'Veni',
                text1: '10 mins'
            },
            {
                imgName: Images.Pictures.statusImg3,
                text: 'Bella',
                text1: '40 mins'
            },
            {
                imgName: Images.Pictures.statusImg4,
                text: 'Saher',
                text1: '1 hour'
            },

        ],



    });

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <>

            <ImageBackground
                style={styles.imageContainer}
                source={Images.Pictures.bgballon}>
                <StatusBar
                    animated={true}
                    backgroundColor="#000"
                    barStyle={statusBarStyle}
                    showHideTransition={statusBarTransition}
                    hidden={hidden} />
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.screenHeader}>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {
                            props.navigation.goBack();
                        }}>
                            <Icon
                                type="Feather"
                                name="chevron-left"
                                style={{
                                    color: '#fff',
                                    fontSize: 26,
                                    marginleft: 0,
                                }}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.Body}>
                        <View style={styles.row}>
                            <TouchableOpacity style={{ flexDirection: 'row', }} onPress={toggleOverlay}>
                                <Icon
                                    type="AntDesign"
                                    name="eye"
                                    style={{
                                        color: '#fff',
                                        fontSize: 26,
                                        marginleft: 0,
                                    }}
                                />
                                <Text style={{ color: '#fff', top: 4, left: 4 }}>20 Views</Text>
                            </TouchableOpacity>
                        </View>





                        <View style={{ backgroundColor: '#aea' }}>
                            <Overlay overlayStyle={styles.overlayStyle} isVisible={visible} onBackdropPress={toggleOverlay}>
                                <View style={{ alignSelf: 'center' }}>
                                    <Text style={{ color: '#fff', top: 10, left: 4 }}>20 Views</Text>
                                </View>
                                <View style={styles.Views}>
                                    <View>
                                    </View>
                                    <FlatList
                                        horizontal={false}
                                        showsVerticalScrollIndicator={false}
                                        // showsHorizontalScrollIndicator={false}
                                        data={data.statusData3}
                                        renderItem={({ item }) => {
                                            return (
                                                <View style={{ paddingLeft: 10, marginVertical: 5 }}>
                                                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                                        <View style={{}}>
                                                            <Image source={item.imgName}
                                                                style={{ width: 50, height: 50, borderRadius: 25, }}
                                                                resizeMode="contain" />
                                                        </View>
                                                        <View style={{ left: 10 }}>
                                                            <Text style={styles.text}>{item.text}</Text>
                                                            <Text style={styles.text1} >{item.text1}</Text>
                                                        </View>

                                                    </View>
                                                </View>
                                            );
                                        }}
                                    />
                                </View>


                            </Overlay>
                        </View>
                    </View>
                </ScrollView></ImageBackground>


        </>

    );
}
export default Storyreplay

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    Body: {
        backgroundColorL: 'purple',
        width: '90%',
        height: '90%',
        alignSelf: 'center',
        // alignItems: 'flex-end',
        justifyContent: 'center',
    },
    inputcontainer: {
        // backgroundColor: '#fff',
        borderRadius: 20,
        width: '90%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-end',

        // alignItems: 'flex-end',
    },
    screenHeader: {
        width: '90%',
        height: 30,
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    row: {
        // width: "90%",
        height: '100%',
        justifyContent: 'flex-end',
        alignSelf: 'center',
    },

    overlayStyle: {
        backgroundColor: '#aaa',
        position: 'absolute',
        opacity: 0.85,
        bottom: 0, width: '100%',
        height: 280
    },
    statusAddBox: {
        width: 65,
        height: 65,
        borderRadius: 19,
        borderColor: '#3729F2',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Views: {
        flexDirection: 'row',
        width: "80%",
        alignSelf: 'center', marginTop: 20,

    },
    imgView: { width: 100, height: 100 },
    text: {
        fontSize: 16, fontWeight: 'bold', color
            : '#fff'
    },
    text1: {
        fontSize: 12, color
            : '#fff'
    }


});



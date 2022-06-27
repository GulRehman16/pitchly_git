import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    ImageBackground,
    ScrollView,
    Image,
    Switch,
} from 'react-native';

import { AppButton, FormInput, Header } from '../../../components';
import { Images } from '../../../constants';

const EditProfile = ({ onSwitch, navigation }) => {
    console.log('on switch', onSwitch);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnable, setIsEnable] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
                            text="Edit Profile"
                            onPress={() => {
                                navigation.goBack();
                            }}
                        />
                    </View>
                    <View style={styles.screenBody}>
                        <View style={styles.whitebox}>
                            <View style={styles.Pictures}>
                                <View style={styles.profile}>
                                    <Image
                                        source={Images.Pictures.profile1}
                                        resizeMode="contain"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 100,
                                        }}
                                    />
                                </View>
                                <View style={{ alignSelf: 'center' }}>
                                    <Text style={styles.changeProfileText}>
                                        Change Profile Picture
                                    </Text>
                                </View>
                                <View style={{ width: '90%', alignSelf: 'center' }}>
                                    <Text style={styles.UserName}>Display Name</Text>
                                    <FormInput placeHolder="Tarrance" />
                                    <Text style={styles.UserName}>User Name</Text>
                                    <FormInput placeHolder="@Tarrance_Official" />
                                    <Text style={styles.UserName}>Bio</Text>
                                    <FormInput
                                        multiLine
                                        height={124}
                                        placeHolder="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy 
                                    Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero
                                     Eos Et Accusam Et Justo."
                                    />

                                    <Text style={styles.UserName}>Hide</Text>
                                    <View style={styles.profilerow}>
                                        <View style={{ width: '85%' }}>
                                            <FormInput
                                                secureText={isEnabled === true ? true : false}
                                                placeHolder="123456789"
                                            />
                                        </View>
                                        <Switch
                                            disabled={false}
                                            value={isEnabled}
                                            onValueChange={toggleSwitch}
                                            onChange={onSwitch}
                                            trackColor={{
                                                true: '#3109FB',
                                                false: '#C2C2C2',
                                            }}
                                            thumbColor={'#FFFFFF'}
                                            size="lg"
                                        />
                                    </View>
                                    <Text style={styles.UserName}>Unhide</Text>
                                    <View style={styles.profilerow}>
                                        <View style={{ width: '85%' }}>
                                            <FormInput
                                                secureText={isEnabled === true ? true : false}
                                                placeHolder="123456789"
                                            />
                                        </View>
                                        <Switch
                                            disabled={false}
                                            value={isEnabled}
                                            onValueChange={toggleSwitch}
                                            onChange={onSwitch}
                                            trackColor={{
                                                true: '#3109FB',
                                                false: '#C2C2C2',
                                            }}
                                            thumbColor={'#FFFFFF'}
                                            size="lg"
                                        />
                                    </View>
                                    <Text style={styles.UserName}>State</Text>
                                    <FormInput placeHolder="Lorem ipsome" />
                                    <Text style={styles.UserName}>City</Text>
                                    <FormInput placeHolder="New York .." />
                                    <Text style={styles.UserName}>
                                        Business Location (Optional)
                                    </Text>
                                    <FormInput placeHolder="Enter Map Location" />
                                </View>
                            </View>
                            <View
                                style={{ width: '80%', alignSelf: 'center', marginVertical: 10, marginTop: 5 }}>
                                <AppButton
                                    LinearColor1={'#5DF7B8'}
                                    LinearColor2={'#3109FB'}
                                    color={'white'}
                                    borderWidth={0.5}
                                    borderColor={'#707070'}
                                    backgroundColor={'#FFFFFF'}
                                    label="Update"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default EditProfile;

const styles = StyleSheet.create({

    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    screenHeader: {
        width: '90%',
        height: 80,
        marginTop: 20,
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
        // alignSelf: 'center',
    },
    whitebox: {
        width: '90%',
        // height: '80%',
        borderRadius: 10,
        backgroundColor: '#fff',
        alignSelf: 'center',
        elevation: 2,

    },
    Pictures: {
        marginVertical: 25,
    },
    profile: {
        width: 103,
        height: 103,
        alignSelf: 'center',
    },

    changeProfileText: {
        textAlign: 'center',
        color: 'blue',
        alignSelf: 'center',
        marginVertical: 5,
    },
    UserName: {
        fontSize: 16,
        color: '#000',
        fontWeight: '400',
        marginVertical: 10,
    },
    profilerow: {
        flexDirection: 'row',
    },

    // imageContainer: {
    //     flex: 1,
    //     justifyContent: 'center',
    // },

    // screenHeader: {
    //     width: '90%',
    //     height: 80,
    //     marginTop: 20,
    //     alignSelf: 'center',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },

    // headingText: {
    //     fontSize: 24,
    //     color: 'black',
    //     fontWeight: 'bold',
    //     letterSpacing: 0.5,
    // },
    // headingTextView: {
    //     width: '100%',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop: 40,
    // },
    // screenBody: {
    //     width: '100%',
    //     height: '100%',
    //     // alignSelf: 'center',


    // },
    // whitebox: {
    //     width: '90%',
    //     height: '80%',
    //     borderRadius: 10,
    //     backgroundColor: '#fff',
    //     alignSelf: 'center',
    //     elevation: 2,
    // },
    // Pictures: {

    //     marginVertical: 25

    // },
    // profile: {
    //     width: 103, height: 103,
    //     alignSelf: 'center'
    // },


    // changeProfileText: {
    //     textAlign: 'center',
    //     color: 'blue',
    //     alignSelf: 'center',
    //     marginVertical: 5

    // },
    // UserName: {
    //     fontSize: 16, color: '#000',
    //     fontWeight: '400', marginVertical: 10

    // },
    // profilerow: {
    //     flexDirection: 'row'
    // }



});

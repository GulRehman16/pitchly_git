import React from 'react';
import { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ImageBackground,
    StatusBar,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Images } from '../../../constants';
import { AppButton, Header } from '../../../components';
const height = Dimensions.get('window').height / 2.5;
const width = Dimensions.get('window').width;
const DeactivateAccount = ({ navigation }) => {
    // useEffect(() => {
    //   setTimeout(() => {
    //     navigation.replace('mainAuth');
    //   }, 1500);
    // }, []);

    return (
        <ImageBackground
            style={styles.imageContainer}
            source={Images.Pictures.appBg}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <StatusBar backgroundColor={'transparent'} translucent={true} />
                <View style={styles.screenHeader}>
                    <Header BAckButton
                        hiddinText

                        onPress={() => {
                            navigation.goBack();
                        }}
                    />
                </View>
                <View style={styles.ScreenBody}>
                    <View style={{ marginTop: 50, }}>


                        <View style={{ width: 144, height: 144, alignSelf: 'center' }}>
                            <Image
                                source={Images.Icons.Key}
                                resizeMode={'contain'}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </View>
                        <View style={styles.texts}>

                            <Text style={styles.headerText1}>
                                Deactivate Account
                            </Text>
                            <Text style={styles.headerText2}>
                                Enter your password
                            </Text>
                        </View>

                        <View style={styles.authButtonContainer}>
                            <View style={{ width: '100%' }}>
                                <Text style={styles.Text}>Password</Text>
                            </View>

                            <View style={styles.inputView}>
                                <View style={styles.input}>
                                    <TextInput placeholder='***********' secureTextEntry={true} />
                                </View>
                            </View>
                            <View style={styles.authButton}>
                                <AppButton
                                    LinearColor1={'#5DF7B8'}
                                    LinearColor2={'#3109FB'}
                                    color={'white'}
                                    borderWidth={0.5}
                                    borderColor={'#707070'}
                                    backgroundColor={'#FFFFFF'}
                                    label="Confirm"
                                    onPress={() => navigation.navigate('deactivateaccount')}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};
export default DeactivateAccount;
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    screenHeader: {
        width: '90%',
        height: 50,
        marginTop: 30,
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

        width: '90%',
        height: '100%',
        alignSelf: 'center',
    },
    headerText1: {
        fontSize: 26,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 10
    },
    headerText2: {
        fontSize: 22,
        color: 'black',
        fontWeight: '600',
        marginVertical: 10
    },

    texts: {
        fontWeight: '600',
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center', marginVertical: 10

    },


    Text: {
        textAlign: 'left', fontWeight: 'bold'
    },

    inputView: {
        width: '100%',
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 0.75,
        borderColor: '#707070',
        backgroundColor: '#E9EBEF'
    },
    authButtonContainer: {
        width: '80%', alignSelf: 'center',
        alignItems: 'center', marginVertical: 10
    },
    authButton: {
        width: '90%', marginVertical: 10
    }



});



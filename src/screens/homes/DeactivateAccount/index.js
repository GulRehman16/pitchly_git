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
import { AppButton } from '../../../components';
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

                <View style={styles.ScreenBody}>

                    <View style={[styles.connect]}>
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
                        <Text style={styles.Text}>Password</Text>
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
                                onPress={() => navigation.navigate('signup')}
                            />
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
        alignItems: 'center',

    },
    ScreenBody: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    connect: {
        width: 142,
        height: 141,
        // aspectRatio: 1,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 15
    },
    connectImg: {
        width: '100%',
        height: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    texts: {
        marginVertical: 10,
        width: '90%'
    },

    headerText1: {
        fontSize: 22,
        fontWeight: 'bold', color: '#000000',
        textAlign: 'center',
        marginVertical: 5,
        letterSpacing: 2
    },
    headerText2: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        marginVertical: 10,
        letterSpacing: 1.5,
        letterSpacing: 2
    },
    authButtonContainer: {
        width: '100%',
        // alignSelf: 'center',
        // marginTop: 30,
    },
    authButton: {
        marginVertical: 30,
        width: '100%',
        // alignSelf: 'center'
    },
    Text: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: '500',
        color: '#000000',
        // textAlign: 'center',
        letterSpacing: 1
    },
    inputView: {
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 0.75,
        borderColor: '#707070',
        backgroundColor: '#E9EBEF'
    }



});



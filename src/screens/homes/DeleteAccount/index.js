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
} from 'react-native';
import { Images } from '../../../constants';
import { AppButton } from '../../../components';
const height = Dimensions.get('window').height / 2.5;
const width = Dimensions.get('window').width;
const DeleteAccount = ({ navigation }) => {
    // useEffect(() => {
    //   setTimeout(() => {
    //     navigation.replace('mainAuth');
    //   }, 1500);
    // }, []);

    return (

        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />

            <View style={styles.ScreenBody}>

                <View style={[styles.connect]}>
                    <Image
                        source={Images.Icons.question}
                        resizeMode={'contain'}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
                <View style={styles.texts}>

                    <Text style={styles.headerText1}>
                        Deactivate Account
                    </Text>
                    <Text style={styles.headerText2}>
                        Are you sure to Deactivate your
                        {'\n'}
                        account
                    </Text>
                </View>
                <View style={styles.authButtonContainer}>
                    <View style={styles.authButton}>
                        <AppButton
                            LinearColor1={'#FFFFFF'}
                            LinearColor2={'#FFFFFF'}
                            color={'black'}
                            backgroundColor={'#FFFFFF'}
                            borderColor={'#707070'}
                            borderWidth={0.5}
                            label="No"
                            onPress={() => navigation.navigate('Accountdeactivation')}
                        />
                    </View>
                    <View style={styles.authButton}>
                        <AppButton
                            LinearColor1={'#5DF7B8'}
                            LinearColor2={'#3109FB'}
                            color={'white'}
                            borderWidth={0.5}
                            borderColor={'#707070'}
                            backgroundColor={'#FFFFFF'}
                            label="Yes"
                            onPress={() => navigation.navigate('deactivateaccount')}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default DeleteAccount;

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
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    authButton: {
        width: '48%'
    }


});



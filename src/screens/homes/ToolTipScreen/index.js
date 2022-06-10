import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text, View,
    StatusBar,
    ImageBackground,
    ScrollView,
    Image
} from 'react-native';
import { AppButton, Header, Tooltips } from '../../../components';
import { UserData } from '../../../components/usersdata';
import { Images } from '../../../constants';

const ToolTipScreen = (props) => {
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

                    </View>
                    <View style={styles.screenBody}>
                        <View style={{ width: 340, height: 100, alignSelf: 'center', backgroundColor: 'pink' }}>
                            <Tooltips Tooltip2
                            />
                        </View>
                        <View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>

    );
};

export default ToolTipScreen;


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
        height: '100%',
        alignSelf: 'center',

    },

});

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'native-base';
import { Images } from '../../../constants';
const Viewstatus = (props) => {
    const [status, setstatus] = useState('Type A Status');
    const [image, setimage] = useState('');

    return (
        <ImageBackground
            style={styles.imageContainer}
            source={Images.Pictures.bgstatus}>
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
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Highlights</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Body}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: '600',

                        }}>

                    </Text>
                </View>

                <View style={styles.inputcontainer}>
                    <TextInput
                        placeholder="Type a Status"
                        onChangeText={text => setstatus(text)}
                        style={{ width: '75%' }}
                    />
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '10%',
                        }}>
                        <TouchableOpacity>
                            <Icon
                                type="Feather"
                                name="send"
                                style={{
                                    color: '#4059E4',
                                    fontSize: 24,
                                    marginleft: 0,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>

    );
}
export default Viewstatus

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Body: {
        backgroundColorL: 'purple',
        width: '90%',
        height: '80%',
        alignSelf: 'center',
        // alignItems: 'flex-end',
        justifyContent: 'center',
    },
    inputcontainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '90%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-end',

        // alignItems: 'flex-end',
    },
    screenHeader: {
        width: '100%',
        height: 30,
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
    },
});

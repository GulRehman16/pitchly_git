import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'native-base';
import { Images } from '../../../constants';
import { Avatar } from 'react-native-elements';
import * as Progress from 'react-native-progress';
const StorieView = (props) => {
    return (
        <ImageBackground
            style={styles.imageContainer}
            source={{ uri: 'https://wallpaperaccess.com/full/840746.jpg' }}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <Progress.Bar
                    style={{ marginTop: 10 }}
                    animated={true}
                    indeterminate={true}
                    color="white"
                    width={300}
                />
                <View style={styles.screenHeader}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.goBack();
                        }}>
                        <Icon
                            type="Feather"
                            name="chevron-left"
                            style={{
                                color: '#fff',
                                fontSize: 40,
                                marginleft: 0,
                            }}
                        />
                    </TouchableOpacity>
                    <Avatar size={'small'} source={Images.Pictures.statusImg1} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, color: '#fff' }}>Jon moxley</Text>
                        <Text style={{ fontSize: 15, color: '#fff' }}>45 Min</Text>
                    </View>
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
                        }}></Text>
                    <View>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
                            Jon
                        </Text>
                    </View>
                </View>

                <View style={styles.inputcontainer}>
                    <TextInput
                        placeholder="Reply on status"
                        onChangeText={text => setstatus(text)}
                        style={{ width: '75%' }}
                    />
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '20%',
                            marginleft: 25,
                        }}>
                        <TouchableOpacity>
                            <Icon
                                type="Feather"
                                name="send"
                                style={{
                                    color: '#4059E4',
                                    fontSize: 24,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        // alignSelf: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        // alignItems: 'center',
    },
});
export default StorieView;
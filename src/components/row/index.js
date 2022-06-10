import {
    StyleSheet,
    Text,
    View,
    Switch,
    Image,
    TouchableOpacity,
    LinearGradient
} from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'native-base'
import { AppButton } from '../../components'

const Row = ({
    text2,
    text,
    navigation,
    onSwitch,
    ICON,
    Row2,
    Row1,
    Image1,
    Image2,
    imwidth,
    Row3,
    borderRadius,
    onPress,
    Press,
    Icon2 }) => {

    return (
        <>
            {Row1 && (

                <View style={{
                    width: '90%', alignSelf: 'center',
                    marginVertical: 10,
                    paddingBottom: 5,
                    borderBottomWidth: 0.70,
                    borderBottomColor: '#aaa',
                    flexDirection: 'row', justifyContent: 'space-between'
                }}>

                    <View style={{ marginTop: 5 }}>
                        <Text style={{
                            color: '#323232',
                            fontSize: 18,
                        }}>{text}
                        </Text>
                    </View>

                    <View style={{ width: '10%', marginTop: 5 }}>
                        <TouchableOpacity>
                            <Image source={Image2} />
                        </TouchableOpacity>
                        <View>

                        </View>

                    </View>
                </View>

            )}


            {Row2 && (
                <View style={{
                    width: '100%', height: 82, alignSelf: 'center',
                    marginVertical: 5,
                    backgroundColor: '#fff',
                    elevation: 1,
                    borderRadius: 20,
                }}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 18
                    }}>
                        <View style={{ flexDirection: 'row', width: '90%' }}>
                            <View style={{ marginRight: 5, width: 22, height: 22 }}>
                                <Image source={Image1}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{
                                    color: '#323232',
                                    fontSize: 14,
                                }}>{text2}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={Press}>
                            <Image source={Image2} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
}
export { Row }

const styles = StyleSheet.create({

    switchbox: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})
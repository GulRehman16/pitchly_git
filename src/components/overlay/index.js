import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Overlay } from 'react-native-elements'

const OverlayScreen = () => {

    const [visible, setVisible] = useState(true);


    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (

        <Overlay isVisible={visible} overlayStyle={styles.overlayStyles} onBackdropPress={toggleOverlay}>

            <View>

                <Text style={styles.headertext}>Contact</Text>
                <View style={styles.contentView}>
                    <Text style={styles.headertext1}>Call</Text>
                    <Text style={styles.lighterText}>+12345697832</Text>
                    <Text style={styles.headertext1}>Email</Text>
                    <Text style={styles.lighterText}>user123@mail.com</Text>
                    <Text style={styles.headertext1}>Location</Text>
                    <Text style={styles.lighterText}>Lorem ipsum dolor sit.</Text>
                </View>
            </View>



        </Overlay>



    )
}

export { OverlayScreen }

const styles = StyleSheet.create({
    overlayStyles: {
        width: '90%',
        height: 267,
        // backgroundColor: '#eae',
        borderRadius: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    headertext: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 30,
        color: '#000', textAlign: 'center'
    },
    contentView: {
        width: '80%',
        alignSelf: 'center',
        // marginVertical: 5

    },
    headertext1: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
        marginTop: 5
    },
    lighterText: {
        // fontWeight: 'bold',
        fontSize: 20,

    },
})
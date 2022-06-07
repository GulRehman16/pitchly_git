import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View
} from 'react-native'
import React from 'react'
import { AppButton } from '../../components';
import { Images } from '../../constants'

const Post = ({
    Image1,
    TalentName,
    City,
    state,
    Duration,
    Date,
}) => {
    return (
        <View>
            <View style={styles.whitebox}>
                <View style={styles.textView}>
                    <View style={styles.PostImage}>
                        <Image source={Image1} />
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.boldtext}>Talent Name</Text>
                        <Text style={styles.texts}>
                            {TalentName}
                        </Text>
                        <Text style={styles.boldtext}>City</Text>
                        <Text style={styles.texts}>
                            {City}
                        </Text>
                        <Text style={styles.boldtext}>State</Text>
                        <Text style={styles.texts}>
                            {state}
                        </Text>
                    </View>
                    <Text style={styles.boldtext}>Duration</Text>
                    <View style={styles.Row}>
                        <View>
                            <Text style={styles.boldtext1}>Start From</Text>
                            <Text style={styles.textes}>
                                {Date}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.boldtext1}>Expiry</Text>
                            <Text style={styles.textes}>
                                {Date}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({

    whitebox: {
        width: '90%',
        height: 566,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignSelf: 'center',
        elevation: 2,
    },
    textView: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10

    },
    PostImage: {
        width: '100%',
        height: 202,
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: 5

    },
    texts: {
        color: '#000',
        fontSize: 14
    },
    textes: {
        color: '#aaa',
        fontSize: 14
    },
    boldtext: {
        color: "#000",
        fontWeight: 'bold',
        marginVertical: 5
    },
    boldtext1: {
        color: "#000",
        fontWeight: '400',
        marginVertical: 5
    },
    centerImage: {
        alignSelf: 'center',
        marginTop: 15,
    },
    Row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})
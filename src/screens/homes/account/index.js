import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    ImageBackground,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { AppButton, Header, StatusView } from '../../../components';
import UserBios from '../../../components/userbios';
import { UserData } from '../../../components/usersdata';
import { Images } from '../../../constants';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Talent from '../../../components/Talent';
import Services from '../../../components/Services';
import Product from '../../../components/Product';
import AllMixed from '../../../components/All';
import ImagePicker from 'react-native-image-crop-picker';
const Account = (props) => {
    const statusData = [
        {
            imgName: Images.Pictures.statusImg1,
            imgWidth: 59,
            imgHeight: 59,
            borderRadius: 19,
            borderColor: '#3729F2',
            borderWidth: 2,
            width: 61,
            height: 61,
            text: 'John',
        },
        {
            imgName: Images.Pictures.statusImg2,
            imgWidth: 59,
            imgHeight: 59,
            borderRadius: 19,
            borderColor: '#3729F2',
            borderWidth: 2,
            width: 61,
            height: 61,
            text: 'Veni',
        },
        {
            imgName: Images.Pictures.statusImg3,
            imgWidth: 59,
            imgHeight: 59,
            borderRadius: 19,
            borderColor: '#3729F2',
            borderWidth: 2,
            width: 61,
            height: 61,
            text: 'Bella',
        },
        {
            imgName: Images.Pictures.statusImg4,
            imgWidth: 59,
            imgHeight: 59,
            borderRadius: 19,
            borderColor: '#3729F2',
            borderWidth: 2,
            width: 61,
            height: 61,
            text: 'Saher',
        },
        {
            imgName: Images.Pictures.statusImg5,
            imgWidth: 59,
            imgHeight: 59,
            borderRadius: 19,
            borderColor: '#3729F2',
            borderWidth: 2,
            width: 61,
            height: 61,
            text: 'Bella',
        },
        {
            imgName: Images.Pictures.statusImg1,
            imgWidth: 59,
            imgHeight: 59,
            borderRadius: 19,
            borderColor: '#3729F2',
            borderWidth: 2,
            width: 61,
            height: 61,
            text: 'John',
        },
        {
            imgName: Images.Pictures.statusImg2,
            imgWidth: 59,
            imgHeight: 59,
            borderRadius: 19,
            borderColor: '#3729F2',
            borderWidth: 2,
            width: 61,
            height: 61,
            text: 'Veni',
        },
        {
            imgName: Images.Pictures.statusImg3,
            imgWidth: 59,
            imgHeight: 59,
            borderRadius: 19,
            borderColor: '#3729F2',
            borderWidth: 2,
            width: 61,
            height: 61,
            text: 'Bella',
        },
        {
            imgName: Images.Pictures.statusImg4,
            imgWidth: 59,
            imgHeight: 59,
            borderRadius: 19,
            borderColor: '#3729F2',
            borderWidth: 2,
            width: 61,
            height: 61,
            text: 'Saher',
        },
        {
            imgName: Images.Pictures.statusImg5,
            imgWidth: 59,
            imgHeight: 59,
            borderRadius: 19,
            borderColor: '#3729F2',
            borderWidth: 2,
            width: 61,
            height: 61,
            text: 'Bella',
        },
    ];
    const [img, setImg] = useState(Images.Logos.plusIcon);
    const [check, setcheck] = useState({
        value: 'PITCHLY FEED',
    });
    const picker = () => {

    };
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
                            onPress={() => props.navigation.navigate('Homes', { screen: 'settings' })}
                            header2
                            press={() => props.navigation.goBack()}
                        />
                    </View>
                    <View style={styles.screenBody}>
                        <UserData
                            height={320}
                            Bio
                            premiumicon
                            Image1={Images.Pictures.profile}
                            UserName="Tarrance"
                            UserEmail="@Tarrance_official "
                            Post={111}
                            Followers={70}
                            Following={52}
                            followbtn1

                            Bios="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"
                            Contact="+13246987"
                            Email="Lorem ipsome"
                            Location="lorem ipsome"
                            pressme={() => { props.navigation.navigate("Homes", { screen: 'editprofile' }) }}
                        />
                        <View style={styles.statusBoxView}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={statusData}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{ paddingLeft: 10 }}>
                                            <StatusView
                                                imgName={item.imgName}
                                                width={item.width}
                                                height={item.height}
                                                imgWidth={item.imgWidth}
                                                imgHeight={item.imgHeight}
                                                text={item.text}
                                            />
                                        </View>
                                    );
                                }}
                            />

                        </View>
                        <View
                            style={{
                                width: '90%',
                                height: 35,
                                marginTop: 20,
                                flexDirection: 'row',
                                alignSelf: 'center',
                            }}>
                            <LinearGradient
                                start={{ x: 1.5, y: 1.0 }}
                                end={{ x: 1.5, y: 2.5 }}
                                colors={['#28A9F61A', '#4C9BD2']}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly',
                                    flexDirection: 'row',
                                    alignSelf: 'center',
                                }}>
                                <TouchableOpacity
                                    onPress={() => setcheck({ ...check, value: 'PITCHLY FEED' })}
                                    style={{
                                        // backgroundColor: 'red',
                                        paddingBottom: check.value == 'PITCHLY FEED' ? 2 : null,
                                        borderBottomWidth: check.value == 'PITCHLY FEED' ? 1 : null,
                                        borderColor: check.value == 'PITCHLY FEED' ? 'blue' : null,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 'bold',
                                            color: check.value == 'PITCHLY FEED' ? 'blue' : 'black',
                                        }}>
                                        All
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setcheck({ ...check, value: 'TALENT FEED' })}
                                    style={{
                                        // backgroundColor: 'red',
                                        paddingBottom: check.value == 'TALENT FEED' ? 2 : null,
                                        borderBottomWidth: check.value == 'TALENT FEED' ? 1 : null,
                                        borderColor: check.value == 'TALENT FEED' ? 'blue' : null,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 'bold',
                                            color: check.value == 'TALENT FEED' ? 'blue' : 'black',
                                        }}>
                                        Talent
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setcheck({ ...check, value: 'SERVICES FEED' })}
                                    style={{
                                        // backgroundColor: 'red',
                                        paddingBottom: check.value == 'SERVICES FEED' ? 2 : null,
                                        borderBottomWidth:
                                            check.value == 'SERVICES FEED' ? 1 : null,
                                        borderColor: check.value == 'SERVICES FEED' ? 'blue' : null,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 'bold',
                                            color: check.value == 'SERVICES FEED' ? 'blue' : 'black',
                                        }}>
                                        Services
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setcheck({ ...check, value: 'PRODUCTS FEED' })}
                                    style={{
                                        // backgroundColor: 'red',
                                        paddingBottom: check.value == 'PRODUCTS FEED' ? 2 : null,
                                        borderBottomWidth:
                                            check.value == 'PRODUCTS FEED' ? 1 : null,
                                        borderColor: check.value == 'PRODUCTS FEED' ? 'blue' : null,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 'bold',
                                            color: check.value == 'PRODUCTS FEED' ? 'blue' : 'black',
                                        }}>
                                        Products
                                    </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center' }}>
                            {check.value === 'PITCHLY FEED' && <AllMixed />}
                            {check.value === 'TALENT FEED' && <Talent />}
                            {check.value === 'SERVICES FEED' && <Services />}
                            {check.value === 'PRODUCTS FEED' && <Product />}
                        </View>
                        <View></View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};
export default Account;

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
    statusBoxView: {
        width: '90%',
        marginTop: 20,
        marginLeft: -10,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    statusAddView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    },
    statusAddBox: {
        width: 65,
        height: 65,
        borderRadius: 19,
        borderColor: '#3729F2',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusAddIcon: { width: 24.63, height: 24.63 },

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
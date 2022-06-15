import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AppButton, Comment } from '../../components';
import { Images } from '../../constants';

const Post = ({ Image1, TalentName, City, state, Duration, Date, Press1 }) => {
  return (
    <View>
      <View style={styles.whitebox}>
        <View style={styles.textView}>
          <View style={styles.PostImage}>
            <Image source={Image1} />
            <View style={styles.box1}></View>

            <TouchableOpacity onPress={Press1} style={styles.play}>
              <Image source={Images.Icons.play} />

            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.boldtext}>Talent Name</Text>
            <Text style={styles.texts}>{TalentName}</Text>
            <Text style={styles.boldtext}>City</Text>
            <Text style={styles.texts}>{City}</Text>
            <Text style={styles.boldtext}>State</Text>
            <Text style={styles.texts}>{state}</Text>
          </View>
          {Duration == true ? (
            <View>
              <Text style={styles.boldtext}>Duration</Text>
              <View style={styles.Row}>
                <View>
                  <Text style={styles.boldtext1}>Start From</Text>
                  <Text style={styles.textes}>{Date}</Text>
                </View>
                <View>
                  <Text style={styles.boldtext1}>Expiry</Text>
                  <Text style={styles.textes}>{Date}</Text>
                </View>
              </View>
            </View>
          ) : (
            <View>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>
                Comment
              </Text>
              <Comment
                image={Images.Pictures.statusImg1}
                name={'John Doe'}
                time={'5 min'}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export { Post };

const styles = StyleSheet.create({
  whitebox: {
    width: '90%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    elevation: 2,
    // marginBottom: 20,
  },
  textView: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  PostImage: {
    width: '100%',
    height: 202,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 5,
  },
  texts: {
    color: '#000',
    fontSize: 14,
  },
  textes: {
    color: '#aaa',
    fontSize: 14,
  },
  boldtext: {
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  boldtext1: {
    color: '#000',
    fontWeight: '400',
    marginVertical: 5,
  },
  centerImage: {
    alignSelf: 'center',
    marginTop: 15,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box1:
  {
    width: 100, height: 100, backgroundColor: "#fff", position: 'absolute',
    left: 120, top: 50, borderRadius: 20, opacity: 0.35
  },
  play: {
    width: 20, height: 20, position: 'absolute',
    left: 160, top: 80, borderRadius: 20,
  },
});
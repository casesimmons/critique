import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function SendAnswer({ navigation }) {
  const answerText = navigation.getParam('answerText');
  // const writer = navigation.getParam('writer');
  const [writer, setWriter] = useState('');

  const sendAnswer = () => {
    // const postObj = {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     feedbackAnswer: answerText,
    //     writer: writer,
    //     questionId: 7,
    //   }),
    // };
    // fetch('http://192.168.1.177:3030/answers', postObj).catch((err) =>
    //   Alert.alert(
    //     'Oops!',
    //     'Problem with internet connection or server! Please try again',
    //     [{ text: 'Confirm' }]
    //   )
    // );
    // console.log('fire');
    // navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoStyle}>Critque</Text>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />

      <Text style={styles.previewTitle}>Feedback Preview</Text>

      <View style={styles.previewBox}>
        <Text style={styles.previewText}>"{answerText}"</Text>
      </View>

      <View style={styles.answerAsContainer}>
        <Text style={styles.answerAs}>Answer As:</Text>

        <View style={styles.chooseNameContainer}>
          <TouchableOpacity style={StyleSheet.anon}>
            <Text style={styles.anonText} onPress={() => setWriter(2)}>
              Anonymous
            </Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity>
              <TextInput
                style={styles.newName}
                placeholder={'Write a name...'}
                placeholderTextColor="orange"
                onChangeText={(text) => setWriter(text)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.linkStyle}>Send as {writer}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  previewBox: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  previewText: {
    // justifyContent: 'flex-start',
    backgroundColor: 'black',
    color: 'white',
    padding: 25,
    height: 350,
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 16,
    fontStyle: 'italic',
    // fontWeight: '700',
  },
  answerAs: {
    color: 'white',
    marginTop: 15,
    marginBottom: 5,
    // marginLeft: 10,
    fontSize: 16,
    // fontWeight: '800',
    // alignItems: 'center',
  },
  // buttons: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // anon: {
  //   backgroundColor: 'red',
  // },
  anonText: {
    color: 'white',
    fontSize: 16,
    // fontWeight: '700',
    // marginTop: 20,
    // marginLeft: 140,
  },
  // inputContainer: {
  //   marginTop: 50,
  //   marginLeft: 150,
  // },
  answerAsContainer: {
    flex: 10,
    backgroundColor: 'black',
    paddingLeft: 10,
    paddingRight: 10,
  },
  chooseNameContainer: {
    flex: 10,
    backgroundColor: 'black',
    paddingLeft: 10,
    paddingRight: 10,
  },
  newName: {
    color: 'orange',
    fontSize: 16,
    // borderColor: 'red',
    // backgroundColor: 'purple',
    // padding: 30,
  },

  // containerbox: {
  //   paddingBottom: 300,
  // },
  // New styles below
  logoStyle: {
    fontSize: 35,
    fontFamily: 'Times New Roman',
    color: 'white',
    paddingTop: 70,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  container: {
    flex: 10,
    backgroundColor: 'black',
    paddingLeft: 10,
    paddingRight: 10,
  },
  userNameStyle: {
    fontSize: 16,
    color: 'orange',
    paddingTop: 15,
  },
  previewTitle: {
    fontSize: 20,
    color: 'orange',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
  requestStyle: {
    fontSize: 16,
    color: 'white',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  outstandingStyle: {
    fontSize: 20,
    color: '#1e90ff',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
  },
  linkContainer: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 38,
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
  linkStyle: {
    fontSize: 20,
    color: '#1e90ff',
  },
  // send: {
  //   color: 'white',
  //   fontSize: 20,
  //   marginTop: 70,
  //   marginLeft: 175,
  // },
});

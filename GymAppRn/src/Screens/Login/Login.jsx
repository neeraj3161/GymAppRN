import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
  Touchable,
  Pressable,
  ActivityIndicator
} from 'react-native';
import { React, useState, useEffect } from 'react';
import Colors from '../../utils/Colors';
import CommonStyles from '../../utils/CommonStyles';
import {
  getAsyncData,
  verifyUserCredentials,
  listUsers,
  addAsyncData,
  useLoggedIn
} from '../../Entity/db/intialDataLoad';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();
  const save = (phone_number, password) => {
    console.log('save pressed!!');
    listUsers();
    verifyUserCredentials(phone_number, password)
      .then(result => {
        console.log('Result:', result);
        let value = JSON.stringify({ phone_number: phone_number, id: result });
        addAsyncData('login_details', value);
        setLoginError(false);
        navigation.replace('BottomNavigation');
      })
      .catch(error => {
        setLoginError(true);
      });
  };

  useEffect(() => {
    let value = getAsyncData('login_details');
    //navigation.replace('BottomNavigation');

    console.log(value);
    console.log('use effect called');
    console.log(useLoggedIn('login_details'));
    if (useLoggedIn('login_details')) {
      navigation.replace('BottomNavigation');
    }
  }, []);

  const [loginError, setLoginError] = useState(false);
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);

  return (
    <View style={styles.mainContainer}>

      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/Images/login_logo.png')}

          style={styles.centerImage}
        />
      </View>

      <View style={styles.bottomContainer}>
        {showActivityIndicator && <ActivityIndicator size="large" />}
        <Text style={styles.loginTxt}>Login</Text>
        <Text style={styles.signTxt}>Sign in to continue</Text>

        <View style={styles.inputView}>
          <Text style={styles.inputHeading}>Phone no</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={phn => setPhoneNumber(phn)}
            value={phone_number}
          />
          <Text style={styles.inputHeading}>Password</Text>
          <TextInput
            style={styles.input}
            keyboardType="visible-password"
            secureTextEntry
            onChangeText={pass => setPassword(pass)}
            value={password}
          />

          {loginError && (
            <Text style={CommonStyles.dangerTxt}>
              Incorrect Credentials. Please try again!!
            </Text>
          )}
          <TouchableOpacity style={styles.signInBtn} onPress={() => { save(phone_number, password) }}>
            <Text style={styles.inputHeading}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.forgotPassTxt}>Forgot password?</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  topContainer: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  bottomContainer: {
    height: '60%',
    backgroundColor: Colors.primaryDark,
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    color: Colors.white,
    height: 50,
    borderRadius: 20,
    marginVertical: 10,
    paddingLeft: 10,
    backgroundColor: '#4B4D5C'
  },

  inputView: {
    width: '80%'
  },

  signInBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.white,
    backgroundColor: '#4942CD',
    height: 45,
    borderRadius: 20,
    marginTop: 10

  },

  centerImage: {
    height: 250,
    width: 400,
  },

  loginTxt: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'sans-serif',
    marginTop: 30

  },

  signTxt: {
    color: '#FBFBFB',
    lineHeight: 30,
    marginBottom: 15
  }
  ,
  inputHeading: {
    color: '#FFFFFF',
    marginLeft: 10
  },

  forgotPassTxt: {
    color: '#DFDFDF',
    marginVertical: 10,
  }

});

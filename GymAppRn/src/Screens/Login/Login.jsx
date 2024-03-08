import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import {React, useState, useEffect} from 'react';
import Colors from '../../utils/Colors';
import CommonStyles from '../../utils/CommonStyles';
import {
  getAsyncData,
  verifyUserCredentials,
} from '../../Entity/db/intialDataLoad';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const save = (phone_number, password) => {
    console.log('save pressed!!');
    verifyUserCredentials(phone_number, password)
      .then(result => {
        console.log('Result:', result);
        let value = JSON.stringify({phone_number: phone_number, id: result});
        addAsyncData('login_details', value);
        setLoginError(false);
      })
      .catch(error => {
        setLoginError(true);
      });
  };

  useEffect(() => {
    let value = getAsyncData('login_details');
    navigation.replace('BottomNavigation');

    console.log(value);
    console.log('use effect called');
    // if (getAsyncData('login_details').length > 0) {
    //   navigation.navigate('BottomNavigation');
    // }
  }, []);

  const [loginError, setLoginError] = useState(false);
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.mainContainer}>
      {/* <Image
        source={require('../../assets/icons/exercise.png')}
        tintColor={Colors.primary}
        style={styles.centerImage}
      /> */}
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Registered phone number"
        onChangeText={phn => setPhoneNumber(phn)}
        value={phone_number}
      />
      <TextInput
        style={styles.input}
        keyboardType="ascii-capable"
        placeholder="Password"
        onChangeText={pass => setPassword(pass)}
        value={password}
      />

      {loginError && (
        <Text style={CommonStyles.dangerTxt}>
          Incorrect Credentials. Please try again!!
        </Text>
      )}
      <TouchableOpacity style={styles.label}>
        <Button
          onPress={() => save(phone_number, password)}
          color={'#525FE1'}
          title="Login"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#DCDCDC',
    marginVertical: 10,
  },

  label: {},

  centerImage: {
    height: 50,
    width: 50,
  },
});

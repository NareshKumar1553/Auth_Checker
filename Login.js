import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";


import auth from '@react-native-firebase/auth';
import SplashScreen from "react-native-splash-screen";
const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={{uri:"https://i.pinimg.com/236x/cb/e2/eb/cbe2eb7eb0cac5b5d6c814b306f55201.jpg"}} /> 
      <StatusBar style="auto" /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
        
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(Cpassword) => setCPassword(Cpassword)}
        /> 
        
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} 
      onPress={()=>{
        if(this.setPassword === this.setCpassword)
        {
          console.log({email, password});
          auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Account Created Successfully");
        navigation.push('Success');
        console.log('User account created & signed in!');    
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert("This Email is Already in Use...");
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          Alert.alert("This Email is Invalid...");
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
        }
        else{
          Alert.alert('Invalid');
        }}}
      >
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});

export default Login;
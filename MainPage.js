import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet, Image, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
const MainPage = ({navigation}) => {
    // GoogleSignin.configure({
    //     webClientId: '514141480292-v47b649mq59fp7lqo9pqtgeu2e80csdk.apps.googleusercontent.com',
    //   });
    //   async function onGoogleButtonPress() {
    //     // Check if your device supports Google Play
    //     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    //     // Get the users ID token
    //     const { idToken } = await GoogleSignin.signIn();
      
    //     // Create a Google credential with the token
    //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
    //     // Sign-in the user with the credential
    //     return auth().signInWithCredential(googleCredential);
    //   }

    GoogleSignin.configure({
        webClientId: '514141480292-v47b649mq59fp7lqo9pqtgeu2e80csdk.apps.googleusercontent.com',
      });

    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }

      var EmailImage = 'https://media.istockphoto.com/id/1135341047/vector/login-page-on-laptop-screen-notebook-and-online-login-form-sign-in-page-user-profile-access.jpg?s=612x612&w=0&k=20&c=EsJEsevxVZujj_IU_nLz4tZcvmcXTy7sQt03bpfz3ZQ=';

    return (
      <View style={styles.Page}>
        <View>
            <TouchableOpacity 
            style={styles.card}
            onPress={() => {navigation.push('Login',{EmailImage})}}>
                <ImageBackground
                resizeMode='stretch' 
                style={styles.image}
                source={{uri:EmailImage}}
               />
               <Text style={{color:'black',fontFamily:'Times New Roman',textTransform:'capitalize',fontWeight:'bold',fontSize:18}}>Email and Password</Text>
            </TouchableOpacity>
            {/* <View><Text style={{color:'#d104b6'}}>Email</Text></View> */}
        </View>
        <View>
            <TouchableOpacity
            style={styles.card}
            onPress={() => {navigation.push('ErrMsg')}}>
                <ImageBackground
                resizeMode='stretch' 
                style={styles.image}
                source={{uri:'http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif'}}
               />
                <Text style={{color:'black',fontFamily:'Times New Roman',textTransform:'capitalize',fontWeight:'bold',fontSize:18}}>Google</Text>
  
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity 
            style={styles.card}
            onPress={() => {navigation.push('ErrMsg')}}>
                <ImageBackground
                resizeMode='stretch' 
                style={styles.image}
                source={{uri:'https://miro.medium.com/max/1400/1*SSRjtoQ0H2X3SBPOiJ5rZw.jpeg'}}
               />
                <Text style={{color:'black',fontFamily:'Times New Roman',textTransform:'capitalize',fontWeight:'bold',fontSize:18}}>github</Text>
  
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity 
            style={styles.card}
            onPress={() => {navigation.push('ErrMsg')}}>
                <ImageBackground
                resizeMode='stretch' 
                style={styles.image}
                source={{uri:'https://storage.googleapis.com/nextivawebsites-wordpressfiles-voip/var/www/virtual/nextiva.com/voip/How-do-I-get-a-business-phone-number-feature-image.png'}}
               />
               <Text style={{color:'black',fontFamily:'Times New Roman',textTransform:'capitalize',fontWeight:'bold',fontSize:18}}>Phone number</Text>
  
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity 
            style={styles.card}
            onPress={() => {navigation.push('QrCode')}}>
                <ImageBackground
                resizeMode='stretch' 
                style={styles.image}
                source={{uri:'https://www.macworld.com/wp-content/uploads/2022/08/thinkstock-qr-code-100725734-orig-1.jpg?quality=50&strip=all'}}
               />
                <Text style={{color:'black',fontFamily:'Times New Roman',textTransform:'capitalize',fontWeight:'bold',fontSize:18}}>Qr Code</Text>
  
            </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        width: 300,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 30,
        alignItems: 'center',
        alignContent: 'space-between',
        marginBottom: 30,
    },
    Page:{
        flex: 1,
        alignContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width: 300,
        height: 100,
        borderRadius: 30,
    }
});
export default MainPage;
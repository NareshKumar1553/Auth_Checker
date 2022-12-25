import React, { Component, useEffect, useState } from 'react';
import { View, Text, StatusBar ,SafeAreaView,ScrollView,StyleSheet} from 'react-native';
// import {
//     GoogleSignin,
//     statusCodes,
//     } from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton,statusCodes } from '@react-native-google-signin/google-signin';

//import { SafeAreaView } from 'react-native-safe-area-context';

// const GoogleAcc = () => {
//     const [loggedIn, setloggedIn] = useState(false);
//     const [userInfo, setuserInfo] = useState([]);
//     _signIn = async () => {
//         try {
//           await GoogleSignin.hasPlayServices();
//           const {accessToken, idToken} = await GoogleSignin.signIn();
//           setloggedIn(true);
//         } catch (error) {
//           if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//             // user cancelled the login flow
//             alert('Cancel');
//           } else if (error.code === statusCodes.IN_PROGRESS) {
//             alert('Signin in progress');
//             // operation (f.e. sign in) is in progress already
//           } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//             alert('PLAY_SERVICES_NOT_AVAILABLE');
//             // play services not available or outdated
//           } else {
//             // some other error happened
//           }
//         }
//       };

//       useEffect(() => {
//         GoogleSignin.configure({
//           scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
//           webClientId:
//             '514141480292-v47b649mq59fp7lqo9pqtgeu2e80csdk.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//           offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//         });
//       }, []);

//       signOut = async () => {
//         try {
//           await GoogleSignin.revokeAccess();
//           await GoogleSignin.signOut();
//           setloggedIn(false);
//           setuserInfo([]);
//         } catch (error) {
//           console.error(error);
//         }
//       };
//       return (
//         <>
//           <StatusBar barStyle="dark-content" />
//           <SafeAreaView>
//             <ScrollView
//               contentInsetAdjustmentBehavior="automatic"
//               style={styles.scrollView}>
    
//               <View style={styles.body}>
//                 <View style={styles.sectionContainer}>
//                   <GoogleSigninButton
//                     style={{width: 192, height: 48}}
//                     size={GoogleSigninButton.Size.Wide}
//                     color={GoogleSigninButton.Color.Dark}
//                     onPress={this._signIn}
//                   />
//                 </View>
//                 <View style={styles.buttonContainer}>
//                   {!loggedIn && <Text>You are currently logged out</Text>}
//                   {loggedIn && (
//                     <Button
//                       onPress={this.signOut}
//                       title="LogOut"
//                       color="red"></Button>
//                   )}
//                 </View>
//               </View>
//             </ScrollView>
//           </SafeAreaView>
//         </>
//       );
//   }
// const styles = StyleSheet.create({
//     scrollView: {
//         backgroundColor:"#ff00ff",
//         },
//     engine: {
//         position: 'absolute',
//         right: 0,
//         },
//     body: {
//         backgroundColor: "#fff",
//         },
//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//         },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//         color: "00ff00",

//         },
//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//         color: 'red',
//         },
//     highlight: {
//         fontWeight: '700',
//         },
//     footer: {
//         color: 'white',
//         fontSize: 12,
//         fontWeight: '600',
//         padding: 4,
//         paddingRight: 12,
//         textAlign: 'right',
//         },
//     buttonContainer: {
//         marginTop: 20,
//         },
//     });
// export default GoogleAcc;


signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

const GoogleAcc = () => {
    return(
        <View>
            <GoogleSigninButton
  style={{ width: 192, height: 48 }}
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={this._signIn}
/>;
        </View>
    );

}

export default GoogleAcc;
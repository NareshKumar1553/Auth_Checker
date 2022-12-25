import React from 'react';
import {View,Text,Image, ImageBackground} from 'react-native';
const QrCode= ()=>{
    return(
        <View style={{flexDirection: 'column',flex:1,justifyContent:'center',alignSelf:'center'}}>
            <Text style={{color:'black',alignSelf:'center',fontWeight:'bold',texttransform:'capitalize',fontSize:24,paddingBottom:30}}>QrCode Authendication</Text>
            <ImageBackground source={require('./Images/QRScan.png')} style={{width: 350, height: 350}}/>
        </View>
    )
}

export default QrCode;
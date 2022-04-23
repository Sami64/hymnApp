import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'

export default function LoadingScreen() {
  return (
    <View style = {styles.container}>
        <View style={styles.imageCont}>
            <Image style={styles.image}source={require("../assets/Logodraft.png")}/>
        </View>
        <View style={styles.textCont}>
            <Text style = {styles.title}>METHODIST HYMNS AND CANS</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:30

},
imageCont:{},
image:{
    height:300,
    width:300
},
textCont:{
    display:'flex',
    flexWrap:"wrap",
    alignItems:'center',
    flexDirection:'row'
    
},
title:{
    flex:1,
    fontWeight:"bold",
    fontSize:24,
    color:"darkblue"
}
})

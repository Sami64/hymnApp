import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function EnglishReadBlock({number,EnglishTitle}) {
  return (
    <View style = {styles.container}>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.textCont}>
        <Text  style= {styles.EnglishTitle}>{EnglishTitle}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginVertical:10,
        marginHorizontal:5
    },
    number:{
        fontWeight:"700",
        marginRight:5
    },
    textCont:{
      justifyContent:"center",
      alignItems:"center",
    },
    EnglishTitle:{
        fontSize:18,
        textAlign:"center"
    }
})
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TwiReadBlock({number,TwiTitle}) {
  return (
    <View style = {styles.container}>
      <Text style={styles.number}>{number}</Text>
      <Text style= {styles.TwiTitle}>{TwiTitle}</Text>
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
    TwiTitle:{
        fontSize:18
    }
})
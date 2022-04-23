import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


function HymnBlock({number,EnglishTitle,TwiTitle}) {
    const navigation  = useNavigation();


    return (
    <TouchableOpacity onPress={()=>navigation.navigate("HymnScreen",{number,EnglishTitle,TwiTitle})}
     style={styles.container}>
        <Text style ={styles.number}>{number}</Text>
        <View style={styles.title}>
            <Text numberOfLines={1} style={styles.titleEnglish}>{EnglishTitle}</Text>
            <Text numberOfLines={1} style={styles.titleTwi}>{TwiTitle}</Text>
        </View>
    </TouchableOpacity> 
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderBottomColor:"gray",
        borderTopColor:"gray",
        borderTopWidth:1,
        borderBottomWidth:1,
        width:Dimensions.get("screen").width,
        height:65
    },
    number:{
        fontSize:18
    },
    title:{
        flexDirection:'column',
        marginLeft:10,
        alignItems:"flex-start",
        justifyContent:'center'
    },
    titleEnglish:{
        fontSize:18,
    },
    titleTwi:{
        color:'gray'
    }
})
export default HymnBlock;
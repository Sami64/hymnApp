import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import React from 'react'
import EnglishReadBlock from '../components/EnglishReadBlock';
import TwiReadBlock from '../components/TwiReadBlock';

export default function HymnScreen() {
  const data = [
    {
      number: '1',
      EnglishTitle: 'Title in french ',
      TwiTitle: 'Title in twi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Ut eu sem integer vitae justo eget magna fermentum iaculis. Nullam non nisi est sit amet facilisis. Adipiscing vitae proin sagittis nisl rhoncus. Vel quam elementum pulvinar etiam. In vitae turpis massa sed elementum. Erat velit scelerisque in dictum non. Erat nam at lectus urna duis convallis. Aenean et tortor at risus viverra adipiscing at in tellus. Nisi est sit amet facilisis magna etiam tempor orci. Nunc sed augue lacus viverra vitae. Malesuada pellentesque elit eget gravida cum. Volutpat ac tincidunt vitae semper quis lectus. Non enim praesent elementum facilisis leo vel fringilla. Aliquet nibh praesent tristique magna sit amet purus. Sed odio morbi quis commodo.',

    },
    {
      number: '2',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '3',
      EnglishTitle: 'Title in ga',
      TwiTitle: 'Title in ga',

    },
    {
      number: '4',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '5',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '6',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '7',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '8',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in tariq',

    },
    {
      number: '9',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '10',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '11',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '12',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '13',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '14',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '15',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '16',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '17',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '18',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '19',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '20',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '21',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '22',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
    {
      number: '23',
      EnglishTitle: 'Title in english',
      TwiTitle: 'Title in twi',

    },
  ];
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
            <View style={styles.engHymnContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>MHB 1</Text>
                    <FlatList
                    data = {data}
                    renderItem = {({item})=>{
                        return(
                            <EnglishReadBlock
                            number = {item.number}
                            EnglishTitle = {item.EnglishTitle}
                            />
                        )
                    }}
                    keyExtractor={(item)=>item.number}

                    />

                </View>
            </View>
            <View style={styles.twiHymnContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>CAN 1</Text>
                    <FlatList
                    data = {data}
                    renderItem = {({item})=>{
                        return(
                            <TwiReadBlock
                            number = {item.number}
                            TwiTitle = {item.TwiTitle}
                            />
                        )
                    }}
                    keyExtractor={(item)=>item.number}
                    />
                </View>
            </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        marginTop:70,
        justifyContent:'center',
        alignItems:'center',
    },
    subContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:Dimensions.get("screen").width
    },
    engHymnContainer:{
        borderRightColor:"darkgrey",
        borderRightWidth:1,


    },
    twiHymnContainer:{
        borderLeftColor:"darkgrey",
        borderLeftWidth:1,

    },
    titleContainer:{
        justifyContent:'center',
        alignItems:'center',

    },
    title:{
        fontWeight:'bold',
        fontSize:22,
    },
})
import { View, Text, StyleSheet, useWindowDimensions, FlatList } from 'react-native'
import React from 'react'
import EnglishReadBlock from '../components/EnglishReadBlock';
import TwiReadBlock from '../components/TwiReadBlock';

export default function HymnScreen() {
  const data = [
    {
      number: '1',
      EnglishTitle: 'Title in french',
      TwiTitle: 'Title in twi',

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
        justifyContent:'center',
        alignItems:'center',
        width:400,
    },
    engHymnContainer:{
        borderRightColor:"darkgrey",
        borderRightWidth:1,
        minWidth:0,
        flex:1,


    },
    twiHymnContainer:{
        borderLeftColor:"darkgrey",
        borderLeftWidth:1,
        minWidth:0,
        flex:1,

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
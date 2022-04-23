import { View, Text, FlatList, Dimensions, TextInput, StyleSheet } from 'react-native'
import React, {useState,useEffect} from 'react'
import HymnBlock from '../components/HymnBlock'


export default function HymnListScreen() {
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

      const [dataFromState,setData]= useState(data)
      const item=({item})=>{
        return(
            <HymnBlock
            number = {item.number}
            EnglishTitle = {item.EnglishTitle}
            TwiTitle = {item.TwiTitle}
            />
        )
    }

      useEffect(()=>{
        console.log("this is rendered")
      },[]);


      const searchHymn = (input)=>{
       let data = dataFromState
       let searchData = data.filter((item)=>{
         return (item.EnglishTitle.toLowerCase().includes(input.toLowerCase())||item.TwiTitle.toLowerCase().includes(input.toLowerCase())||item.number)
       });
       setData(searchData);
      }
    return (
   <>
   <TextInput
   style = {styles.input}
   placeholder = "Search For Hymn Here"
   multiline = {false}
   autoCorrect={false}
   returnKeyType={"search"}
   selectionColor={"darkblue"}
   onChangeText = {(input)=>{searchHymn(input)}}
   />
   <Text> This is your hymn </Text>
    <FlatList
    data={dataFromState}
    renderItem={item}
    keyExtractor = {(item,index)=>index.toString()}
    />
   </>
  )
}
const styles = StyleSheet.create({
  input:{
    backgroundColor:"white",
    borderColor:"black",
    borderWidth:2,
    borderRadius:10,
    paddingHorizontal:10,
    color:"black",
    height:Dimensions.get("screen").height/15,
    margin:10
  },
})
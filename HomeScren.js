import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScren = ({navigation}) => {
  return (
    <View style={{flexDirection:'row'}}>
     <Button  title='lab4' onPress={()=>{
        navigation.navigate("Lab4");
     }}/>
      <Button  title='lab4_b2' onPress={()=>{
        navigation.navigate("Lab4_b2");
     }}/>
       <Button  title='lab4_b3' onPress={()=>{
        navigation.navigate("Lab4_b3");
     }}/>
    </View>
  )
}

export default HomeScren
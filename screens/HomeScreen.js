import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";
import * as Animatable from 'react-native-animatable';

import {HeroImage} from '../assets'


const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    },[])

  return (
     

    <SafeAreaView className="bg-white flex-1 relative">

    {/* first section */}
   <View className="flex-row mt-10 px-6 items-center space-x-2">
    <View className="w-16 h-16 bg-black rounded-full justify-center items-center"><Text className="text-[#00bcc9] text-3xl font-semibold">GO</Text></View>
    <Text className="text-[#2a2b4b] text-3xl font-semibold">Travel</Text>
   </View>
   

    {/* second section */}
    <View className="px-6 mt-1 ">
      <Text className="text-[#3c6072] text-[42px]">Enjoy the trip with</Text>
      <Text className="text-[#00BCC9] text-[38px] font-bold">Good Moments</Text>
      <Text className="text-[#3c6072] text-base">At <Text>Go <Text>Travel</Text></Text> we offer the best travelling options, Hotels, Attractions, Resturantans,</Text>
    </View>


    {/* Third section */}
     <View className="w-[260px]  h-[260px] bg-[#00bcc9] rounded-full absolute bottom-36 -right-36"></View>
     <View className="w-[300px]  h-[300px] bg-[#e99265] rounded-full absolute bottom-1 -left-36"></View>


    {/* image container section */}
    <View className="flex-1 relative items-center justify-center">
      <Animatable.Image 
      animation="fadeIn"
      easing="ease-in-out"
      source={HeroImage} className="w-full h-full object-cover mt-8 "/>

     
      <TouchableOpacity 
        onPress={() => navigation.navigate("Discover")}
       className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00bcc9] rounded-full items-center justify-center">  

         <Animatable.View
         animation={"pulse"}
         easing="ease-in-out"
         iterationCount={"infinite"}
          className="w-20 h-20 items-center justify-center rounded-full bg-[#00bcc9] animate-pulse">
          <Text className="text-gray-50 text-[40px] font-semibold">Go</Text>
        </Animatable.View>
  
      </TouchableOpacity>
    

</View>



   
    

   </SafeAreaView>

     
  )
}

export default HomeScreen

// const styles = StyleSheet.create({
//   container: {
//    paddingTop: 20
// }
// })
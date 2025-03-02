import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import TruncatedText from '~/components/TruncatedText'
import ReadMore from '@fawazahmed/react-native-read-more';
import { Entypo } from '@expo/vector-icons';
import { Stack } from 'expo-router';


const dummyChannel = {
    "input": {
      "url": "https://www.youtube.com/@MrBeast/about"
    },
    "url": "https://www.youtube.com/@MrBeast/about",
    "handle": "@MrBeast",
    "handle_md5": "dd748d5dfc88b91ea388429c3c685874",
    "banner_img": "https://yt3.googleusercontent.com/5KWiriZZ_KEoEdSMFTJKj2M6vR_XSiRZeQ-ix0cvG3TGZuGoi8sfAjrSiZAP0GzXBkmF8ZGytw=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    "profile_image": "https://yt3.googleusercontent.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s160-c-k-c0x00ffffff-no-rj",
    "name": "MrBeast",
    "subscribers": 369000000,
    "Description": "Go Watch Beast Games! https://unfur.ly/BeastGames\nSUBSCRIBE FOR A COOKIE!\n\nAccomplishments:\n- Raised $20,000,000 To Plant 20,000,000 Trees\n- Removed 30,000,000 pounds of trash from the ocean\n- Helped 2,000 people walk again\n- Helped 1,000 blind people see\n- Helped 1,000 deaf people hear\n- Built wells in Africa\n- Built and gave away 100 houses\n- Adopted every dog in a shelter (twice)\n- Given millions to charity\n- Started my own snack company Feastables\n- Started my own software company Viewstats\n- Started Lunchly, a tasty, better-for-you lunch option\n- Gave away a private island (twice)\n- Gave away 1 million meals\n- Gave away a chocolate factory\n- I counted to 100k\n- Ran a marathon in the world's largest shoes\n- Survived 50 hours in Antarctica\n- Recreated Squid Game in real life\n- Created the largest competition show with 1000 people (Beast Games)\n- Gave $5,000,000 to one person\n- Passed T-Series to become most subscribed YouTube channel 🥹\nyou get it, I appreciate all of you so much :)\n",
    "videos_count": 851,
    "created_date": "2012-02-19T00:00:00.000Z",
    "views": 74185220544,
    "Details": {
      "location": "United States"
    },
    "Links": [
      "unfur.ly/BeastGames",
      "instagram.com/mrbeast",
      "twitter.com/MrBeast",
      "facebook.com/mrbeast"
    ],
    "identifier": "UCX6OQ3DkcsbYNE6H8uQQuVA",
    "id": "UCX6OQ3DkcsbYNE6H8uQQuVA",
    "timestamp": "2025-03-02T17:30:27.207Z"
  }

const Channel = () => {
  return (
    <ScrollView className='flex-1 bg-slate-700' >
      <Stack.Screen name={dummyChannel.name} options={{headerShown: false}} />
        <Image source={{ uri: dummyChannel.banner_img }} className='h-40 w-full' />

        <View className='flex-row p-4 gap-5 items-center'>
            <Image source={{ uri: dummyChannel.profile_image }} className='h-20 w-20 rounded-full' />
            <View>
                <View className='mb-1' >
                <Text className='font-bold text-xl'>{dummyChannel.name}</Text>
                <Text className='text-slate-900 text-sm -mt-1'>{dummyChannel.handle}</Text>
                </View>
                <Text>{dummyChannel.subscribers.toLocaleString()}       {dummyChannel.videos_count} videos</Text>
            </View>
        </View>

        <View className='p-4'>
            <TruncatedText text={dummyChannel.Description} lines={6} />
        </View>

        <View className='p-4 bg-slate-800 rounded-lg mx-2'>
          <Text className='text-xl font-semibold text-slate-200 mb-4'>Channel Details</Text>
          <View className='gap-3'>
            <View className='flex-row items-center'>
              <Entypo name="location-pin" size={18} color="#cbd5e1" />
              <Text className='text-slate-300 ml-2'>Location: {dummyChannel.Details.location}</Text>
            </View>
            <View className='flex-row items-center'>
              <Entypo name="calendar" size={18} color="#cbd5e1" />
              <Text className='text-slate-300 ml-2'>Created: {new Date(dummyChannel.created_date).toLocaleDateString()}</Text>
            </View>
            <View className='flex-row items-center'>
              <Entypo name="eye" size={18} color="#cbd5e1" />
              <Text className='text-slate-300 ml-2'>Views: {dummyChannel.views.toLocaleString()}</Text>
            </View>
          </View>
        </View>



        <View className='p-4'>
          <Text className='text-xl color-gray-950 mb-2' >Links:</Text>
          {dummyChannel.Links.map((link, index) => 
            <Text key={index} style={styles.link} >{link}</Text>
          )}
        </View>

    </ScrollView>
  )
}

export default Channel

const styles = StyleSheet.create({
  link: {
    color: '#1a73e8',
  }
})
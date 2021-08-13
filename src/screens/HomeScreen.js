import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Pressable,
  Image,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MaterialIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function HomeScreen({ navigation }) {
  return (
    <>
      <Image source={{}} />
      <View style={styles.title}>
        <Text style={{ textAlign: 'center', color: '#fdf22b' }}>
          NO MORE SILENCE, NOT ON OUR WATCH!
        </Text>
        <Text
          style={{ paddingVertical: 5, textAlign: 'center', color: '#fdf22b' }}
        >
          SUICIDE NOW CAUSES MORE YOUTH DEATHS THAN DOES ANY PHYSICAL DISEASE.
        </Text>
        <Text
          style={{ paddingBottom: 5, textAlign: 'center', color: '#fdf22b' }}
        >
          WELL NO MORE, NOT ON OUR WATCH!
        </Text>
        <Text style={{ textAlign: 'center', color: '#fdf22b' }}>
          LET’S BE THE GENERATION TO DEMAND ACTION & END THE SILENCE & STIGMA
          FOR GOOD!
        </Text>
        <View>
          <Text style={{ marginTop: 25, color: '#fdf22b' }}>WHAT WE DO</Text>
          <Text style={{ paddingBottom: 5, color: '#fdf22b' }}>
            FIND HELP, MAKE FRIENDS, JOIN THE FIGHT!
          </Text>
          <Text
            style={{ paddingBottom: 5, textAlign: 'center', color: '#fdf22b' }}
          >
            END THE SILENT EPIDEMIC has 3 distinct pillars. No matter where you
            are in your journey with mental health or suicide, you belong here
            and we have something to offer you. Find out where to start by
            choosing which of the following statements applies to you:
          </Text>
        </View>
      </View>

      <View style={styles.BottomNav}>
        <Pressable onPress={() => navigation.push('Education')}>
          <Feather name="check-circle" size={24} color="#fdf22b" />
          <Text>Checkin</Text>
        </Pressable>
        <Pressable onPress={() => navigation.push('Education')}>
          <MaterialIcons name="cast-for-education" size={24} color="#fdf22b" />
          <Text>Education</Text>
        </Pressable>
        <Pressable onPress={() => navigation.push('Education')}>
          <AntDesign name="tool" size={24} color="#fdf22b" />
          <Text>Tools</Text>
        </Pressable>
        <Pressable onPress={() => navigation.push('Education')}>
          <MaterialCommunityIcons
            name="professional-hexagon"
            size={24}
            color="#fdf22b"
          />
          <Text>Professional</Text>
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    flex: 10,
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#540368',
  },
  BottomNav: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderWidth: 3,
    paddingBottom: 15,
    backgroundColor: '#0b8933',
  },
})

export default HomeScreen

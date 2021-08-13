import React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MaterialIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function HomeScreen({ navigation }) {
  return (
    <>
      <View style={{ flexDirection: 'row', backgroundColor: '#540368' }}>
        <Image
          source={require('../../assets/logo.png')}
          style={{
            height: 100,
            width: 100,
          }}
        />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: '#fdf22b',
              paddingHorizontal: 5,
              paddingBottom: 5,
            }}
          >
            NO MORE SILENCE, NOT ON OUR WATCH!
          </Text>
          <Text
            style={{
              color: '#fdf22b',
              paddingHorizontal: 5,
            }}
          >
            SUICIDE NOW CAUSES MORE YOUTH DEATHS THAN DOES ANY PHYSICAL DISEASE.
          </Text>
        </View>
      </View>

      <View style={styles.title}>
        <Text style={{ textAlign: 'center', color: '#fdf22b' }}>
          LET’S BE THE GENERATION TO DEMAND ACTION & END THE SILENCE & STIGMA
          FOR GOOD!
        </Text>
        <View>
          <Text style={{ marginTop: 15, color: '#fdf22b' }}>WHAT WE DO:</Text>
          <Text style={{ paddingBottom: 5, color: '#fdf22b' }}>
            FIND HELP, MAKE FRIENDS, JOIN THE FIGHT!
          </Text>
          <Text style={{ paddingBottom: 5, color: '#fdf22b' }}>
            No matter where you are in your journey with mental health, you
            belong here and we have something to offer you. Find out where to
            start:
          </Text>
        </View>
      </View>
      <View
        style={{ flex: 20, paddingHorizontal: 15, backgroundColor: '#540368' }}
      >
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 5,
            alignItems: 'center',
          }}
        >
          <Image
            style={{ height: 75, flex: 1 }}
            source={require('../../assets/help.jpeg')}
          />
          <Text
            style={{
              flex: 2,
              color: '#fdf22b',
              padding: 5,
              paddingBottom: 35,
            }}
          >
            MENTAL HEALTH EDUCATION
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 5,
            alignItems: 'center',
          }}
        >
          <Image
            style={{ height: 75, flex: 1 }}
            source={require('../../assets/activism.png')}
          />
          <Text
            style={{ flex: 2, color: '#fdf22b', padding: 5, paddingBottom: 35 }}
          >
            MENTAL HEALTH ACTIVISM
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 5,
            alignItems: 'center',
          }}
        >
          <Image
            style={{ height: 75, flex: 1 }}
            source={require('../../assets/friends.jpeg')}
          />
          <Text
            style={{ flex: 2, color: '#fdf22b', padding: 5, paddingBottom: 35 }}
          >
            RESOURCE HUB
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
    flex: 6.5,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: '#540368',
  },
  BottomNav: {
    position: 'relative',
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderWidth: 3,
    paddingBottom: 15,
    backgroundColor: '#0b8933',
  },
})

export default HomeScreen

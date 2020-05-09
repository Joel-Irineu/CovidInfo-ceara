import React from 'react'
import {Text, SafeAreaView, ScrollView, Image, View} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import {List, Switch} from 'react-native-paper'
import styles from '../../styles'

import mylogo from '../../assets/logo.png'

export default function Home() {
  const navigation = useNavigation()

  function navigateToCovidInfo(){
    navigation.navigate('CovidInfo')
  }
  function navigateToSobre(){
    navigation.navigate('Sobre')
  }


  return(
    <SafeAreaView style={styles.container}> 
      <View style={styles.header}>
        <Image source={mylogo} style={styles.logo}/>
        <Text style={[styles.boxText, {alignSelf: 'center', color: '#3267ff', marginTop: -5, marginBottom: 5}]}>Auto avaliação</Text>
      </View>

      <ScrollView>
      <List.Item
        style={[styles.box, styles.boxContainer]}
        title="First Item"
        description="Item description"
        left={props => <Switch {...props} />}
      />

      </ScrollView>

    </SafeAreaView>
  )
}
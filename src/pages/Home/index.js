import React from 'react'
import {Text, SafeAreaView, TouchableOpacity, ScrollView, Image, View} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles'

import mylogo from '../../assets/logo.png'
import sobre from '../../assets/icons/sobre.png'
import dados from '../../assets/icons/dados.png'
import avaliacao from '../../assets/icons/sobre.png'

export default function Home() {
  const navigation = useNavigation()

  function navigateToCovidInfo(){
    navigation.navigate('CovidInfo')
  }
  function navigateToSobre(){
    navigation.navigate('Sobre')
  }
  function navigateToAutoAvaliacao(){
    navigation.navigate('AutoAvaliacao')
  }


  return(
    <SafeAreaView style={styles.container}> 
      <View style={styles.header}>
        <Image source={mylogo} style={styles.logo}/>
        <Text style={[styles.boxText, {alignSelf: 'center', color: '#3267ff', marginTop: -5, marginBottom: 5}]}>Escolha uma das opções</Text>
      </View>

      <ScrollView>
      <TouchableOpacity onPress={navigateToSobre} style={styles.box}>
          <Text style={styles.boxText}>Sobre o novo virus(sintomas, prevenção e transmição)</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToCovidInfo} style={styles.box}>
          <Text style={styles.boxText}>Dados no Estado do Ceará</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToAutoAvaliacao} style={styles.box}>
          <Text style={styles.boxText}>Faça uma Auto avaliação</Text>
        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  )
}
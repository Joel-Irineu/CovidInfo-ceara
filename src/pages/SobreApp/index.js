import React from 'react'
import {Text, SafeAreaView, TouchableOpacity, ScrollView, Image, View} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles'

import mylogo from '../../assets/logo.png'
import covid from '../../assets/icons/covid.png'
import dados from '../../assets/icons/dados.png'
import avaliacao from '../../assets/icons/avaliacao.png'

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
        <Text style={[styles.boxText, {alignSelf: 'center', color: '#3267ff', marginTop: -5, marginBottom: 5}]}>Sobre o app</Text>
      </View>

      <View style={styles.boxContainer}>
            <Text style={styles.aboutTitle}>Sobre o CovidInfo</Text>
            <Text style={[styles.aboutText, {marginBottom: 5}]}>O CovidInfo Ceará é uma aplicação mobile que tem como objetivo informar os dados atualizados diariamente sobre o covid-19 no estado do Ceará. A aplicação retorna dados como: quantidade de municípios afetados, quantidade de pessoas por município, quantidade de casos por faixa etária/sexo, etc...</Text>
            <Text style={[styles.aboutText, {marginBottom: 5}]}>Além disso, no app o usuário tem acesso a informações sobre o vírus, prevenção e pode fazer uma auto avaliação a cerca da sua saúde.</Text>
            <Text style={[styles.aboutText, {marginBottom: 5}]}>A aplicação foi feita com React-Native, consumindo os dados da api do IntegraSus Ceará</Text>
            <Text style={styles.aboutTitle}>Criador</Text>
            <Text style={[styles.aboutText, {marginBottom: 5}]}>Joel Irineu - Aluno do curso técnologo em Analise e Desenvolvimento de Sistemas, Estácio Moreira Campos.</Text>
        </View>

    </SafeAreaView>
  )
}
import React from 'react'
import {Text, SafeAreaView, TouchableOpacity, ScrollView, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import styles from './styles'

import mylogo from '../../assets/logo.png'

export default function Home() {
  const navigation = useNavigation();

  function navigateToPorTIpo(){
    navigation.navigate('PorTipo');
  }
  function navigateToMunicipios(){
    navigation.navigate('Municipios');
  }
  function navigateToPorMunicipio(){
    navigation.navigate('PorMunicipio');
  }
  function navigateToNovosCasos(){
    navigation.navigate('NovosCasos');
  }
  function navigateToIdadeSexo(){
    navigation.navigate('IdadeSexo');
  }
  function navigateToObtos(){
    navigation.navigate('Obtos');
  }
  function navigateToSuspeitos(){
    navigation.navigate('Suspeitos');
  }
  function navigateToExames(){
    navigation.navigate('Exames');
  }
  function navigateToTestes(){
    navigation.navigate('Testes');
  }

  return(
    <SafeAreaView style={styles.container}> 
      <Image source={mylogo} style={styles.logo}/>

      <ScrollView>
        <TouchableOpacity onPress={navigateToPorTIpo} style={styles.box}>
            <Text style={styles.boxText}>Dados por situação</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToMunicipios} style={styles.box}>
            <Text style={styles.boxText}>Quantidade de municipios afetados</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToPorMunicipio} style={styles.box}>
            <Text style={styles.boxText}>Quantidade de pessoas com covid-19 por Município</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToNovosCasos} style={styles.box}>
            <Text style={styles.boxText}>Novos casos por dia</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToIdadeSexo} style={styles.box}>
            <Text style={styles.boxText}>Quantidade de casos por faixa etaria/Sexo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToObtos} style={styles.box}>
            <Text style={styles.boxText}>Quantidade de óbito por Município</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToSuspeitos} style={styles.box}>
            <Text style={styles.boxText}>Quantidade de casos supeitos</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToExames} style={styles.box}>
            <Text style={styles.boxText}>Quantidade de Exames</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={navigateToTestes} style={styles.box}>
            <Text style={styles.boxText}>Testes</Text>
          </TouchableOpacity> */}

      </ScrollView>

    </SafeAreaView>
  )
}
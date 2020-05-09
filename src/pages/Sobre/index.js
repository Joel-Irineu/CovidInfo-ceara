import React from 'react';
import {Text, SafeAreaView, FlatList, View, Image, ScrollView } from 'react-native';
import styles from '../../styles'

import sintomas from '../../services/sintomas'
import transmicao from '../../services/transmicao'
import prevencao from '../../services/prevencao'

import mylogo from '../../assets/logo.png'

export default function Sobre() {
  
    const sintomasCovid = sintomas()
    const transmicaoCovid = transmicao()
    const prevencaoCovid = prevencao()


  return(
    <SafeAreaView style={[styles.container]}> 
      <View style={styles.header}>
        <Image source={mylogo} style={styles.logo}/>
        <Text style={[styles.boxText, {alignSelf: 'center', color: '#3267ff', marginTop: -5}]}>Sobre a Covid-19</Text>
      </View>

        <ScrollView >
            <View style={styles.boxContainer}>
                <Text style={styles.aboutTitle}>O que é o Covid-19?</Text>
                <Text style={styles.aboutText}>Covid-19 é o nome oficial do novo corona vírus, que causa doenças respiratórias.</Text>
                <Text style={styles.aboutText}>O Quadro pode variar de leve a moderado semelhante a uma gripe, já outros casos podem ser mais graves principalmente em pessoas com doenças preeexistentes e podendo levar a morte.</Text>
            </View>

            <Text style={[styles.aboutTitle, {marginTop: 10}, styles.boxContainer]}>Principains sintomas</Text>
            <FlatList
                data={sintomasCovid}
                horizontal={true}
                renderItem={({ item }) => (
                    <View style={[styles.box, {padding: 5, height: 150, width: 200, alignContent: 'center'}]}>
                        <Image source={item.url} style={{width: 90, height: 90, alignSelf: 'center'}} />
                        <Text style={[styles.boxText, {alignSelf: 'center', textAlign: 'center', marginLeft: 5}]}>{item.sintoma}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />

            <Text style={[styles.aboutTitle, {marginTop: 10}, styles.boxContainer]}>Como é transmitido?</Text>
            <FlatList
                data={transmicaoCovid}
                horizontal={true}
                renderItem={({ item }) => (
                    <View style={[styles.box, {padding: 5, height: 150, width: 200, alignContent: 'center'}]}>
                        <Image source={item.url} style={{width: 90, height: 90, alignSelf: 'center'}} />
                        <Text style={[styles.boxText, {alignSelf: 'center', textAlign: 'center', marginLeft: 5}]}>{item.sintoma}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />

            <Text style={[styles.aboutTitle, {marginTop: 10}, styles.boxContainer]}>Como se prevenir:</Text>
            <FlatList
                style={{marginBottom: 20}}
                data={prevencaoCovid}
                horizontal={true}
                renderItem={({ item }) => (
                    <View style={[styles.box, {padding: 5, height: 150, width: 200, alignContent: 'center'}]}>
                        <Image source={item.url} style={{width: 90, height: 90, alignSelf: 'center'}} />
                        <Text style={[styles.boxText, {alignSelf: 'center', textAlign: 'center', marginLeft: 5}]}>{item.sintoma}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </ScrollView>


    </SafeAreaView>
  );
}
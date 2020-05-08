import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, FlatList, View } from 'react-native';
import styles from './styles';
import useCovid from '../../services/api'


export default function PorTipo() {
  const [data, setData] = useState([])
  const {getConfirmados} = useCovid()

  const confirmados = useEffect(()=>{
    getConfirmados().then((e) => setData(e.data))
  }, [])


  return(
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}>Dados da COVID-19 por situação</Text> 

      <FlatList
        refreshing={false}
        onRefresh={confirmados}
        data={data}
        renderItem={({item})=>(

        
        <View style={styles.box}>
          <Text style={styles.boxTitle}>{item.quantidade}</Text>
          <Text style={styles.boxText}>{item.tipo ? item.tipo : 'Indefinidos'}</Text>
        </View>

        )}
        keyExtractor={(e, i)=>toString(i)}
      />

    </SafeAreaView>
  );
}
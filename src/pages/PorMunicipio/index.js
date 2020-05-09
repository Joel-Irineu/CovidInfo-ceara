import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, FlatList, View } from 'react-native';
import styles from './styles';
import useCovid from '../../services/api'


export default function Municipios() {
  const [data, setData] = useState([])
  const {getPessoas} = useCovid()

  const pessoas =  useEffect( ()=>{
     getPessoas().then((e) => setData(e.data))
  }, [])

  return(
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}>Pessoas confirmadas por Município</Text> 

      <Text></Text>

      <FlatList
        refreshing={false}
        onRefresh={pessoas}
        data={data}
        
        renderItem={({item})=>(
        
        <View style={styles.box}>
          <Text style={styles.boxTitle}>{item.qtdConfirmado} Pessoas</Text>
          <Text style={styles.boxText}>{item.municipio}</Text>
        </View>

        )}
        keyExtractor={(e, i)=>toString(i)}
      />

    </SafeAreaView>
  );
}
import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, FlatList, View } from 'react-native';
import styles from './styles';
import useCovid from '../../services/api'


export default function Municipios() {
  const [data, setData] = useState([])
  const {getNovosCasos} = useCovid()

const novosCasos =  useEffect(()=>{
    getNovosCasos().then((e) => setData(e.data))
  }, [])


  return(
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}>Quantidade de novos casos por dia</Text> 

      <FlatList
        refreshing={false}
        onRefresh={novosCasos}
        data={data}
        renderItem={({item})=>(

        
        <View style={styles.box}>
			<Text style={styles.boxTitle}>{item.quantidade} Casos</Text>
        	<Text style={styles.boxText}>{item.data}</Text>
		</View>

        )}
        keyExtractor={(e, i)=>toString(i)}
      />

    </SafeAreaView>
  );
}
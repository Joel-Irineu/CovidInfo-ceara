import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, FlatList, View } from 'react-native';
import styles from '../../styles'
import useCovid from '../../services/api'


export default function Exames() {
  const [data, setData] = useState([])
  const {getExames} = useCovid()

const exames =  useEffect(()=>{
    getExames().then((e) => setData(e.data))
  }, [])


  return(
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}>Quantidade de Exames realizados</Text> 

      <FlatList
        refreshing={false}
        onRefresh={exames}
        data={data}
        renderItem={({item})=>(

        
        <View style={styles.box}>
			    <Text style={styles.boxTitle}>{item.quantidadeExame} Casos</Text>
          <Text style={styles.boxText}>{item.tipo}</Text>
		    </View>

        )}
        keyExtractor={(e, i)=>toString(i)}
      />

    </SafeAreaView>
  );
}
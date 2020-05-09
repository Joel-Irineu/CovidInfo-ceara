import React, {useState, useEffect} from 'react'
import {Text, SafeAreaView, FlatList, View } from 'react-native'
import styles from '../../styles'
import useCovid from '../../services/api'


export default function IdadeSexo() {
  const [data, setData] = useState([])
  const {getIdadeSexo} = useCovid()

const idadeSexo =  useEffect(()=>{
    getIdadeSexo().then((e) => setData(e.data))
  }, [])


  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quantidade de casos por faixa etaria/Sexo</Text> 
      </View> 

      <FlatList
        refreshing={false}
        onRefresh={idadeSexo}
        data={data}
        renderItem={({item})=>(

        
        <View style={styles.box}>
			<Text style={styles.boxTitle}>{item.quantidade} Cassos</Text>
            <Text style={styles.boxText}>sexo: {item.sexo}</Text>
        	<Text style={styles.boxText}>Faixa Etaria: de {item.faixaEtaria}</Text>
		</View>

        )}
        keyExtractor={(e, i)=>toString(i)}
      />

    </SafeAreaView>
  );
}
import React, {useState, useEffect} from 'react'
import {Text, SafeAreaView, FlatList, View } from 'react-native'
import styles from '../../styles'
import useCovid from '../../services/api'


export default function Obtos() {
  const [data, setData] = useState([])
  const {getObto} = useCovid()

const obto =  useEffect(()=>{
    getObto().then((e) => setData(e.data))
  }, [])


  return(
    <SafeAreaView style={styles.container}> 
      <View style={styles.header}>
        <Text style={styles.title}>Quantidade de óbito por Município</Text> 
      </View>

      <FlatList
        refreshing={false}
        onRefresh={obto}
        data={data}
        renderItem={({item})=>(

        
        <View style={styles.box}>
			<Text style={styles.boxTitle}>{item.qtdObito} Óbtos</Text>
            <Text style={styles.boxText}>{item.municipio}</Text>
		</View>

        )}
        keyExtractor={(e, i)=>toString(i)}
      />

    </SafeAreaView>
  );
}
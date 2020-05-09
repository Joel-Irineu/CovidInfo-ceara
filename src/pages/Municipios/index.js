import React, {useState, useEffect} from 'react'
import {Text, SafeAreaView, FlatList, View } from 'react-native'
import styles from '../../styles'
import useCovid from '../../services/api'


export default function Municipios() {
  const [data, setData] = useState([])
  const {getMunicipios} = useCovid()

  const municipios = useEffect(()=>{
    getMunicipios().then((e) => setData(e.data))
  }, [])


  return(
    <SafeAreaView style={styles.container}> 
      <View style={styles.header}>
        <Text style={styles.title}>Quantidade de municipios afetados</Text> 
      </View>

      <FlatList
        refreshing={false}
        onRefresh={municipios}
        data={data}
        renderItem={({item})=>(

        
        <View style={styles.box}>
			    <Text style={styles.boxTitle}>{item.quantidade}</Text>
        	<Text style={styles.boxText}>{item.tipo}</Text>
		</View>

        )}
        keyExtractor={(e, i)=>toString(i)}
      />

    </SafeAreaView>
  );
}
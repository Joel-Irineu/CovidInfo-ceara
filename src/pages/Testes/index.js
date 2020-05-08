import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, FlatList, View } from 'react-native';
import styles from './styles';
import useCovid from '../../services/api'


export default function Obtos() {
  const [data, setData] = useState([])
  const {getSuspeitos} = useCovid()

const suspeitos =  useEffect(()=>{
    getSuspeitos().then((e) => setData(e.data))
  }, [])


  return(
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}>Quantidade de casos Suspeitos</Text> 

      <FlatList
        refreshing={false}
        onRefresh={suspeitos}
        data={data}
        renderItem={({item})=>(

        
        <View style={styles.box}>
			<Text style={styles.boxTitle}>{item.quantidade} Casos</Text>
            <Text style={styles.boxText}>{item.tipo}</Text>
		</View>

        )}
        keyExtractor={(e, i)=>toString(i)}
      />

    </SafeAreaView>
  );
}
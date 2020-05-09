import React, {useState, useEffect} from 'react'
import {Text, SafeAreaView, FlatList, View } from 'react-native'
import styles from '../../styles'
import useCovid from '../../services/api'


export default function Testes() {
  const [data, setData] = useState([])
  const [] = useState([])
  const {getSuspeitos, getExames} = useCovid()

  const suspeitos =  useEffect(()=>{
    getExames().then((e) => setData(e.data))
  }, [])

  // const oia =  useEffect(()=>{
  //   getExames().then((e)=> setDataExames(e.dataExames))
  // }, [])
  
  console.log(dataExames)

  return(
    <SafeAreaView style={styles.container}>
       
      <Text style={styles.title}>Quantidade de casos Suspeitos</Text> 

      {/* <Text style={styles.boxText}> {data[0].quantidade} </Text> */}

      <FlatList
        refreshing={false}
        onRefresh={suspeitos}
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
import React, {useState} from 'react'
import {Text, SafeAreaView, ScrollView, Image, View} from 'react-native'
import {List, Switch, Button} from 'react-native-paper'
import styles from '../../styles'

import mylogo from '../../assets/logo.png'

export default function Home() {
  const [resultado, setResultado] = useState('')
  const [myColor, setMyColor] = useState('#fff')
  const [questionario, setQuestionario] = useState({
    item01_1: false,
    item01_2: false,
    item01_3: false,
    item01_4: false,
    item01_5: false,
    item03_1: false,
    item05_1: false,
    item10_1: false,
    item10_2: false
  })

  function calcular(){
    let pontos = 0
    Object.keys(questionario).forEach(e => {
      if(questionario[e] === true){
        pontos = pontos + parseInt(e.substr(4, 2))
      }
    })
    if(pontos <= 9){
      setResultado('Baixo Risco')
      setMyColor('#66ff6f')
    }else if(pontos >= 10 && pontos <= 19){
      setResultado('Medio Risco')
      setMyColor('#fcff65')
    }else if(pontos >= 20){
      setResultado('Alto Risco')
      setMyColor('#eb6968')
    }
    console.log(pontos, resultado)
  }
  
  function alterarValor(name, value){
    setQuestionario({...questionario, [name]: value})
  }


  return(
    <SafeAreaView style={styles.container}> 
      <View style={styles.header}>
        <Image source={mylogo} style={styles.logo}/>
        <Text style={[styles.boxText, {alignSelf: 'center', color: '#3267ff', marginTop: -5, marginBottom: 5}]}>Auto avaliação</Text>
      </View>

      <ScrollView style={styles.boxContainer}>
      <View style={styles.boxContainer}>
        <Text style={styles.aboutText}>Selecione os itens abaixo, após pressione o botão calcular para que seu resultado apareça</Text>
      </View>

        <List.Item
          titleStyle={[styles.boxTitle, {fontSize: 18}]}
          title="Dor de cabeça"
          left={props => 
            <Switch 
                {...props}
                value={questionario.item01_1} 
                onValueChange={(e)=> alterarValor('item01_1', e)} 
            />
          }
        />

        <List.Item
          titleStyle={[styles.boxTitle, {fontSize: 0}]}
          descriptionStyle={[styles.boxTitle, {fontSize: 18}]}
          description="Secreção nasal ou espirros"
          left={props => 
            <Switch 
                {...props}
                value={questionario.item01_2} 
                onValueChange={(e)=> alterarValor('item01_2', e)} 
            />
          }
        />

        <List.Item
          titleStyle={[styles.boxTitle, {fontSize: 18}]}
          title="Irritação na garganta"
          left={props => 
            <Switch 
                {...props}
                value={questionario.item01_3} 
                onValueChange={(e)=> alterarValor('item01_3', e)} 
            />
          }
        />
        
        <List.Item
          titleStyle={[styles.boxTitle, {fontSize: 18}]}
          title="Dores no corpo"
          left={props => 
            <Switch 
                {...props}
                value={questionario.item01_4} 
                onValueChange={(e)=> alterarValor('item01_4', e)} 
            />
          }
        />

        <List.Item
          titleStyle={[styles.boxTitle, {fontSize: 18}]}
          title="Diarréia"
          left={props => 
            <Switch 
                {...props}
                value={questionario.item01_5} 
                onValueChange={(e)=> alterarValor('item01_5', e)} 
            />
          }
        />

        <List.Item
          titleStyle={[styles.boxTitle, {fontSize: 18}]}
          title="Tosse seca"
          left={props => 
            <Switch 
                {...props}
                value={questionario.item03_1} 
                onValueChange={(e)=> alterarValor('item03_1', e)} 
            />
          }
        />

        <List.Item
          titleStyle={[styles.boxTitle, {fontSize: 18}]}
          title="Febre"
          left={props => 
            <Switch 
                {...props}
                value={questionario.item05_1} 
                onValueChange={(e)=> alterarValor('item05_1', e)} 
            />
          }
        />

        <List.Item
          titleStyle={[styles.boxTitle, {fontSize: 0}]}
          descriptionStyle={[styles.boxTitle, {fontSize: 18}]}
          description="Falta de ar ou dificuldades respiratorias"
          left={props => 
            <Switch 
                {...props}
                value={questionario.item10_1} 
                onValueChange={(e)=> alterarValor('item10_1', e)} 
            />
          }
        />

        <List.Item
          titleStyle={[styles.boxTitle, {fontSize: 0}]}
          descriptionStyle={[styles.boxTitle, {fontSize: 18}]}
          
          description="Teve contato com casos confirmados de covid"
          left={props => 
            <Switch 
                {...props}
                value={questionario.item10_2} 
                onValueChange={(e)=> alterarValor('item10_2', e)} 
            />
          }
        />

        <Button mode='outlined' onPress={calcular} style={styles.btn}>
          <Text style={{color: '#fff'}}>Calcular</Text>
        </Button>

        <View style={[styles.box, {alignItems: 'center', backgroundColor: '#262626', marginBottom: 20}]}> 
          <Text style={[styles.boxTitle, {color: myColor}]}>{resultado}</Text>
        </View>

      </ScrollView>


    </SafeAreaView>
  )
}
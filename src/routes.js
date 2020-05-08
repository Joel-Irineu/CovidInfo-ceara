import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Home from './pages/Home'
import PorTipo from './pages/PorTipo'
import Municipios from './pages/Municipios'
import PorMunicipio from './pages/PorMunicipio'
import NovosCasos from './pages/NovosCasos'
import IdadeSexo from './pages/IdadeSexo'
import Obtos from './pages/Obtos'
import Suspeitos from './pages/Suspeitos'
import Exames from './pages/Exames'

import Testes from './pages/Testes'

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="PorTipo" component={PorTipo} />
                <AppStack.Screen name="Municipios" component={Municipios} />
                <AppStack.Screen name="PorMunicipio" component={PorMunicipio} />
                <AppStack.Screen name="NovosCasos" component={NovosCasos} />
                <AppStack.Screen name="IdadeSexo" component={IdadeSexo} />
                <AppStack.Screen name="Obtos" component={Obtos} />
                <AppStack.Screen name="Suspeitos" component={Suspeitos} />
                <AppStack.Screen name="Exames" component={Exames} />

                <AppStack.Screen name="Testes" component={Testes} />
                
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
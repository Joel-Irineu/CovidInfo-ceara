import React from 'react'
import axios from 'axios'
import returnDate from './todaysDate'

const todysDate =  returnDate()
const baseUrl = 'https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus'


export default function useCovid() {
    return{
        getConfirmados(date = todysDate){
            return axios.get(`${baseUrl}/qtd-por-tipo?data=${date}&tipo=Confirmado&idMunicipio=`)
        },
        getMunicipios(date = todysDate){
            return axios.get(`${baseUrl}/qtd-municipios-casos-confirmados?data=${date}&tipo=Confirmado&idMunicipio=`)
        },
        getPessoas(date = todysDate){
            return axios.get(`${baseUrl}/qtd-por-municipio?data=${date}&tipo=Confirmado&idMunicipio=`)
        },
        getNovosCasos(date = todysDate){
            return axios.get(`${baseUrl}/qtd-por-dia-tipo?data=${date}&tipo=Confirmado&idMunicipio=`)
        },
        getIdadeSexo(date = todysDate){
            return axios.get(`${baseUrl}/qtd-por-faixa-etaria-sexo?data==${date}&tipo=Confirmado&idMunicipio=`)
        },
        getObto(date = todysDate){
            return axios.get(`${baseUrl}/qtd-por-municipio?tipo=%C3%93bito&data=${date}`)
        },
        getSuspeitos(date = todysDate){
            return axios.get(`${baseUrl}/qtd-suspeitos?data=${date}&tipo=Confirmado&idMunicipio=`)
        },
        getExames(date = todysDate){
            return axios.get(`${baseUrl}/qtd-exames?data=${date}&tipo=Confirmado&idMunicipio=`)
        }
    }
}
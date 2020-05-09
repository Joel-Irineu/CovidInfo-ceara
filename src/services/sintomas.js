import febre from '../assets/sintomas/febre.png'
import tosse from '../assets/sintomas/tosse.png'
import narizEscorrendo from '../assets/sintomas/narizEscorrendo.png'
import dorGarganta from '../assets/sintomas/dorGarganta.png'
import dificuldadeRespiratoria from '../assets/sintomas/dificuldadeRespiratoria.png'
import faltaDeAr from '../assets/sintomas/faltaDeAr.png'



export default function sintomas(){

    return [
        {
            sintoma: 'Febre',
            url: febre,
            id: 1
        },
        {
            sintoma: 'Tosse',
            url: tosse,
            id: 2
        },
        {
            sintoma: 'Nariz escorrendo',
            url: narizEscorrendo,
            id: 3
        },
        {
            sintoma: 'Dor na garganta',
            url: dorGarganta,
            id: 4
        },
        {
            sintoma: 'Dificuldade Respiratoria',
            url: dificuldadeRespiratoria,
            id: 5
        },
        {
            sintoma: 'Falta de ar',
            url: faltaDeAr,
            id: 6
        }
    ]
} 
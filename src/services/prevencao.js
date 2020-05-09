import cobrirTosse from '../assets/prevencao/cobrirTosse.png'
import maosRosto from '../assets/prevencao/maosRosto.png'
import lavarMaos from '../assets/prevencao/lavarMaos.png'
import mascara from '../assets/prevencao/mascara.png'
import distancia from '../assets/prevencao/distancia.png'
import medica from '../assets/prevencao/medica.png'



export default function prevencao(){

    return [
        {
            sintoma: 'Sempre cubra o rosto ao tossir',
            url: cobrirTosse,
            id: 1
        },{
            sintoma: 'Evite contato do rosto com as mãos ao sair',
            url: maosRosto,
            id: 2
        },{
            sintoma: 'Lave bem as mãos e use acool em gel 70%',
            url: lavarMaos,
            id: 3
        },{
            sintoma: 'Ao sair de casa use mascaras',
            url: mascara,
            id: 4
        },{
            sintoma: 'Respeite o distanciamento social',
            url: distancia,
            id: 5
        },{
            sintoma: 'Ao sentir algum sintoma procure um médico',
            url: medica,
            id: 6
        }
        
    ]
} 
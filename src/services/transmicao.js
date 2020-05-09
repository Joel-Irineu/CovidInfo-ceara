import pessoa from '../assets/transmicao/pessoa.png'
import objeto from '../assets/transmicao/objeto.png'

export default function transmicao(){

    return [
        {
            sintoma: 'Contato com pessoas contaminadas',
            url: pessoa,
            id: 1
        },
        {
            sintoma: 'Contato com objetos contaminados',
            url: objeto,
            id: 2
        }
    ]
} 
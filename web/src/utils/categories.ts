import foodSvg from '../assets/food.svg'
import otherSvg from '../assets/others.svg'
import transportSvg from '../assets/transport.svg'
import accomodationSvg from '../assets/accommodation.svg'
import servicesSvg from '../assets/services.svg'

export const CATEGORIES ={
    food: {
        name: 'Alimentação',
        icon: foodSvg
    },
    others: {
        name: 'Outros',
        icon: otherSvg
    },
    transport: {
        name: 'Transporte',
        icon: transportSvg          
    },
    accommodation: {
        name: 'Acomodação',
        icon: accomodationSvg
    },
    services: {
        name: 'Serviços',
        icon: servicesSvg
    }
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>
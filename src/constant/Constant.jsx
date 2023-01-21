import { HiGift } from 'react-icons/hi'
import building from '../assets/building.jpg'
import elder from '../assets/elder.jpg'
import mutual from '../assets/mutual.jpg'
import project from '../assets/project.jpg'
import proposal from '../assets/proposal.jpg'
import sunshine from '../assets/sunshine.jpg'

const icon = <HiGift className='higift' size={62} />

export const choose = [
    {
        id: 1,
        icon: icon,
        title: '98% Success Rate',
        desc: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer. ',
    },
    {
        id: 2,
        icon: icon,
        title: '100% Success Rate',
        desc: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer. ',
    },
    {
        id: 3,
        icon: icon,
        title: '100% Success Rate',
        desc: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer. ',
    },
]

export const navbar = [
    {
        id: 1,
        title: 'home',
    },
    {
        id: 2,
        title: 'attorneys',
    },
    {
        id: 3,
        title: 'practice areas',
    },
    {
        id: 4,
        title: 'about us',
    },
]

export const practices = [
    {
        id: 1,
        title: 'business law',
        image: project,
        full: true,
    },
    {
        id: 2,
        title: 'partnership law',
        image: mutual,
        full: false,
    },
    {
        id: 3,
        title: 'real state law',
        image: building,
        full: false,
    },
    {
        id: 4,
        title: 'business law',
        image: proposal,
        full: true,

    },
    {
        id: 5,
        title: 'landlord disputes',
        image: sunshine,
        full: true,
    },
    {
        id: 6,
        title: 'elder abuse',
        image: elder,
        full: false,
    },
]
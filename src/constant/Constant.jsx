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

export const clients = [
    {
        id: 1,
        image: elder,
        name: 'Jane Cooper',
        tag: 'Ceo of Hunt',
        subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer.sitaliqua dolor do amet sint.Velit officia'
    },
    {
        id: 2,
        image: sunshine,
        name: 'Devon Lane',
        tag: 'Ceo of Hunt',
        subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer.sitaliqua dolor do amet sint.Velit officia'
    },
    {
        id: 3,
        image: proposal,
        name: 'Robert Fox',
        tag: 'Ceo of Hunt',
        subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer.sitaliqua dolor do amet sint.Velit officia'
    },
    {
        id: 4,
        image: project,
        name: 'Bishal Paudel',
        tag: 'Ceo of Hunt',
        subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer.sitaliqua dolor do amet sint.Velit officia'
    },
    {
        id: 5,
        image: building,
        name: 'Sachin Dhakal',
        tag: 'Ceo of Hunt',
        subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer.sitaliqua dolor do amet sint.Velit officia'
    },
    {
        id: 6,
        image: mutual,
        name: 'Dhiraj Subdei',
        tag: 'Ceo of Hunt',
        subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer.sitaliqua dolor do amet sint.Velit officia'
    },
]

export const teams = [
    {
        id: 1,
        name: 'Danial Def',
        cases: 301,
        img: elder
    },
    {
        id: 2,
        name: 'Sanfole',
        cases: 850,
        img: elder
    },
    {
        id: 3,
        name: 'Cesforilla',
        cases: 470,
        img: elder
    },
    {
        id: 4,
        name: 'Colleen',
        cases: 180,
        img: elder
    },
    {
        id: 5,
        name: 'Haldone',
        cases: 212,
        img: elder
    },
    {
        id: 6,
        name: 'Nik Jeo',
        cases: 350,
        img: elder
    },
]

export const faq = [
    {
        id: 1,
        title: 'What is my worth?',
        subtitle: 'lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        id: 2,
        title: 'React projects GitHub',
        subtitle: 'In this tutorial we are going to build and deploy a real time chat application. Covered topics: React.js, Node.js, Express.js, and Socket.io. react reactjs ...'
    },
    {
        id: 3,
        title: '25 React projects',
        subtitle: '21 React Project Ideas for Beginners ?? 1. Messaging Application ?? 2. Productivity Applications ?? 3. Entertainment Applications ?? 4. Social Cards ?? 5. Calculator ?? 6.'
    },
    {
        id: 4,
        title: 'Can you learn React in 2 days?',
        subtitle: 'For a programmer who is already familiar with HTML and at least one other programming language, learning React will take no more than a single day. '
    },
]
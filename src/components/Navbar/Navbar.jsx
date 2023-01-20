import './Navbar.css'
import { useState } from "react"
import logo1 from '../../assets/Vector.png'
import logo2 from '../../assets/Igstudio.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { navbar } from '../../constant/Constant'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [active, setActive] = useState(0);
    const navHandler = () => {
        setNav(!nav)
    }

    // const activeHandler = (title) => {
    //     setActive(title.title)
    // }
    return (
        <div>
            <div className="mobile">
                <div className="image">
                    <img src={logo1} />
                    <img src={logo2} />
                </div>
                {
                    !nav ? <GiHamburgerMenu size={20} onClick={navHandler} style={{ cursor: 'pointer' }} /> : <AiFillCloseCircle size={30} onClick={navHandler} />
                }

            </div>
            {
                nav ? (
                    <div className='mobile-nav'>
                        <AiFillCloseCircle size={30} onClick={navHandler} className='close' />
                        <div className='list'>
                            {
                                navbar.map((item, i) => (
                                    <a href={`#${item.title}`} key={item.id}>{item.title}</a>
                                ))
                            }
                        </div>
                        <div className='contact'>
                            <a href="#contact">Contact Now</a>
                        </div>
                    </div>
                )
                    :
                    ''
            }
            <div className='navbar'>
                <div className="image">
                    <img src={logo1} />
                    <img src={logo2} />
                </div>
                <div className='nav-link'>
                    {
                        navbar.map((item, i) => (
                            <a href={`#${item.title}`} key={item.id}>{item.title}</a>
                        ))
                    }
                </div>
                <div className='contact'>
                    <a href="#contact">Contact Now</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
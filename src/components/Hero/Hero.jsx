import './Hero.css'
import Image from '../../assets/Image.png'
import { HiMail } from 'react-icons/hi'


const Hero = () => {
    return (
        <div className='hero'>
            <div className='first-part'>
                <div className='hero-text'>
                    <span className='top'>You don’t have to</span>
                    <span className='bottom'>Fight them Alone.</span>
                </div>
                <div className='lorem'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, <br /> curabitur sodales conubia ut inceptos faucibus himenaeos tortor <br /> eget, hac massa gravida arcu interdum proin curae.
                </div>
                <div className='input'>
                    <HiMail size={22} className='input-icon' />
                    <input type="text" placeholder='Enter your mail address' autoFocus />
                    <div className='talk'>Let's Talk</div>
                </div>
            </div>
            <div className='img-container'>
                <img src={Image} alt="" />
            </div>
        </div>
    )
}

export default Hero
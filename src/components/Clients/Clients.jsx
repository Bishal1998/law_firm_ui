import './Clients.css'
import { RxArrowRight, RxArrowLeft } from 'react-icons/rx'
import elder from '../../assets/elder.jpg'
import { clients } from '../../constant/Constant'
import { useState } from 'react'

const Clients = () => {
    const [startIndex, setStartIndex] = useState(0);

    const checkNumber = (number) => {
        if (number - clients.length > 3) {
            return startIndex === 3
        }
        if (clients.length - 1 > number) {
            return startIndex === 0
        }
    }

    const leftHandler = () => {
        setStartIndex((startIndex) => {
            let newIndex = startIndex + 1;
            return newIndex
        })
    }
    const rightHandler = () => {
        setStartIndex((startIndex) => {
            let newIndex = startIndex - 1;
            return newIndex

        })
    }

    return (
        <div className='clients'>
            <div className='clients-top'>
                <p className='clients-title'>What says our <br />
                    happy Clients</p>
                <div className='clients-button'>
                    <div className="left">
                        <RxArrowLeft size={32} onClick={leftHandler} />
                    </div>
                    <div className="right">
                        <RxArrowRight size={32} onClick={rightHandler} />
                    </div>
                </div>
            </div>
            <div className='clients-profile'>
                {
                    clients.slice(startIndex, 3).map((item) => {
                        return <div className="profile" key={item.id}>
                            <img src={item.image} />
                            <p className='profile-title'>{item.name}</p>
                            <p className='profile-tag'>{item.tag}</p>
                            <p className='profile-desc'>{item.subtitle}</p>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Clients
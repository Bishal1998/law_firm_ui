import './faq.css'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { useState } from 'react'
import { faq } from '../../constant/Constant'

const FAQ = () => {

    const [hidden, setHidden] = useState(Array(faq.length).fill(true));


    const showHandler = (i) => {
        let newHidden = [...hidden];
        newHidden[i] = false;
        setHidden(newHidden);
    }


    const hideHandler = (i) => {
        let newHidden = [...hidden];
        newHidden[i] = true;
        setHidden(newHidden);
    }


    return (
        <div className='faq'>
            <div className="faq-left">
                <p className="faq-title">FAQ</p>
                <p className="faq-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ipsum esse quo assumenda a incidunt odit? Reprehenderit</p>
            </div>
            <div className="faq-right">
                {
                    faq.map((item, i) => {
                        return <div key={item.id}>
                            <div className="faq-clicker">
                                <div className="question" onClick={() => hideHandler(i)}>{item.title}</div>
                                {
                                    hidden[i] ? <BsFillPlusCircleFill size={28} className='faq-icon' onClick={() => showHandler(i)} /> : ''
                                }
                            </div>
                            {
                                hidden[i] ? '' : <div className="opener">{item.subtitle}</div>
                            }
                            <div className="faq-line"></div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default FAQ
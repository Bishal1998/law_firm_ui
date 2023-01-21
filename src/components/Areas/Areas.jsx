import './Areas.css'
import project from '../../assets/project.jpg'
import elder from '../../assets/elder.jpg'

import { practices } from '../../constant/Constant'

const Areas = () => {

    return (
        <div className='areas' id='practice areas'>
            <p className='areas-title'>Area of Practices</p>
            <div className='areas-img'>
                {
                    practices.map((item) => {
                        return item.full ? <div className="collection" key={item.id}>
                            <div className='overlay'></div>
                            <img src={item.image} />
                            <p>{item.title}</p>
                        </div>
                            :
                            <div className="collection1" key={item.id}>
                                <div className='overlay1'></div>
                                <img src={item.image} />
                                <p>{item.title}</p>
                            </div>
                    })
                }


            </div>
        </div>
    )
}

export default Areas
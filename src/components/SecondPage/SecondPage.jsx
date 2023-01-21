import ChooseList from './ChooseList'
import './second.css'
import { choose } from '../../constant/Constant'

const SecondPage = () => {
    return (
        <div className='second-page' id='attorneys'>
            <div className='second-intro'>
                <p className='introduction'>Let’s Introduce <br />
                    Ourself</p>
                <div className='divider'></div>
                <div className='detail'>
                    <p className='lawyer'>Criminal Lawyer</p>
                    <span className='lawyer-detail'>Amet minim mollit non deserunt ullamco est <br />
                        sit aliqua dolor do amet sint. Velit officia consequatduis <br />
                        enim velit mollit Exercitation.</span>
                </div>
            </div>
            <div className='second-choose'>
                <p className='choose'>Why Choose us?</p>
                <div className='list-choose'>
                    {
                        choose.map(({ id, icon, title, desc }) => {
                            return <ChooseList key={id} icon={icon} title={title} desc={desc} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SecondPage
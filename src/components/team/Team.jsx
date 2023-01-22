import './Team.css'
import { teams } from '../../constant/Constant'
const Team = () => {
    return (
        <div className='team'>
            <p className='team-title'>
                Our Team
            </p>
            <div className="team-list">
                {
                    teams.map(({ id, img, name, cases }) => {
                        return <div className="team-member" key={id}>
                            <img src={img} />
                            <div className="member">
                                <p className="member-name">{name}</p>
                                <p className="member-case">{cases} Cases</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Team
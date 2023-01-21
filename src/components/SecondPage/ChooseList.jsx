import './second.css'

const ChooseList = ({ title, desc, icon }) => {
    return (
        <div className='chooselist'>
            <div className='choose-icon'>
                {icon}
            </div>
            <p className='success'>{title}</p>
            <p className='sucess-desc'>{desc} </p>
            <div className='read-more'>Read More</div>
        </div>
    )
}

export default ChooseList
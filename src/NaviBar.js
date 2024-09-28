import './Navibar.css';
import plant from './plant.svg'
function Navibar() {
    return(
    <div className='Navibar'>
        <div className='lefty'>
        <img src={plant} alt="Plant" />
        <h1>Vedvatika</h1>
        </div>
        <list className="Navibar-list">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </list>
    </div>
    )
}

export default Navibar
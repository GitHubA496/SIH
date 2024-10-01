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
            <li>Virtual garden</li>
            <li>FAQs</li>
            <li>Contact</li>
        </list>
        <form action="post" >
            <input type="text" placeholder="Search" className='search' />
        </form>
    </div>
    )
}

export default Navibar
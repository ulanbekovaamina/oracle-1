import frame from '../img/6.svg'
import './block-items.css'

export default function BlockItem({ fetch, img }) {
    return (
        <div className='container'>           
            <div className="block-item">
                <div><img src={img} alt="" /></div>
                <h1 className="word">{fetch}</h1>
                <div><button className="block-btn"><div className='frame'><img src={frame} alt="" className='frameses' /></div>Подробнее</button></div>
            </div>
        </div>  
    )
}
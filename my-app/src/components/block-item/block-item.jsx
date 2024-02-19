import './block-item.css'
import img18 from '../img/18.png'
import img19 from '../img/19.png'
import img20 from '../img/20.svg'
import { count, users } from '../../datas/datas'
import ItemsInCart from '../one-cart/one-cart'


export default function BlockItems() {
    return (
           <div className='block-items'>
             <div className="glavnyi">
                <div className='block-items_cs'>
                    <div className="block-items_css">
                        <h1>Как проходят наши <br /> уроки?</h1>
                        <p>Habitant at sed tincidunt sapien. Purus maecenas <br /> risus mattis duis arcu se.</p>
                    </div>
                </div>
                <div><img src={img18} alt="" className='list' /></div>
                <div><img src={img19} alt="" className='strka' /></div>
                <div style={{
                    display: 'flex',
                    width: '800px'
                }}>
                    {
                        count.map(dev => <ItemsInCart img={dev.img} word={dev.word} world={dev.world} />)
                    }
                </div>
                <div><img src={img20} alt="" className='strlka' /></div>
            </div>
           </div>
        
    )
}
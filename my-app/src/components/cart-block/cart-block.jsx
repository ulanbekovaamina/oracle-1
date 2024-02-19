import img9 from '../img/9.png'
import img10 from '../img/10.png'
import img11 from '../img/11.png'
import './cart-block.css'
import ItemsCart from '../items-cart/items-cart'
import { users } from '../../datas/datas'

export default function CartBlock() {
    return (
        <div className='con_cart-block'>
            <div className='text'>
                <p>Quis pretium vitae suspendisse.</p>
                <h1>О нас</h1>
            </div>
            <div className='cart-block'>
                <div><img src={img9} alt="" className='working' /></div>
                <div><img src={img10} alt="" className='work' /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p className='cart-block_text'>Eu facilisis duis pulvinar dui sapien vestibulum. Praesent sed ridiculus iaculis 
                        eget egestas blandit euismod. Ligula senectus egestas cras risus sodales commodo. Enim nec neque
                        sodales quis sit massa posuere. Id eget ultrices tempus sit id donec feugiat. Congue
                        aliquet tristique egestas dictum tincidunt ac. Odio varius sitsapien aliquet aliquam quis et
                        tellus velit bibendum. Quis pretium vitae suspendisse at. 
                        Iaculis eu convallis egestas a mattis viverra.
                        Id leo sollicitudin mattiId leo sollicitudin matti
                    </p>
                    <div style={{
                        display: 'flex',
                        textAlign: 'center',
                        width: '440px'
                    }}>
                        {
                            users.map(elem => <ItemsCart sun={elem.sun} year={elem.year} text={elem.text} />)
                        }
                    </div>
                    <div><img src={img11} alt="" className='photo-react' /></div>
                </div>
            </div>
        </div>
    )
}
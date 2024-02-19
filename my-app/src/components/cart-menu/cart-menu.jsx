import { items } from '../../datas/datas'
import CartItem from '../cart-item/cart-item'
import img12 from '../img/12.png'
import './cart-menu.css'

export default function CartMenu() {
    return (
        <div className='cart-menu wrap'>
            <div>
                <div className='counter'>
                    <h1 className='count'>Почему мы?</h1>
                    <p>Habitant at sed tincidunt sapien. Purus maecenas <br />
                        risus mattis duis arcu se.</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {
                        items.map(user => <CartItem immg={user.immg} me={user.me} p={user.p} />)
                    }
                </div>
            </div>
            <div><img src={img12} alt="" className='img12' /></div>
        </div>
    )
}
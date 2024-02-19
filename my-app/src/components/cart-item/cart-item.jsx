import './cart-item.css'

export default function CartItem({ immg, me, p }) {
    return (
        <div>
            <div className='cart-item'>
                <div><img src={immg} alt="" /></div>
                <p className='cld'>{me}</p>
                <p className='could'>{p}</p>
            </div>
        </div>
    )
}
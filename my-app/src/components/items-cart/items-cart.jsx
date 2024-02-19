import './items-cart.css'

export default function ItemsCart({sun, year, text}) {
    return (
        <div className='block-cart'>
            <div className="items-cart">
                <h2>{sun}</h2>
                <div>
                <p className='p'>{year}</p>
                <p className='pi'>{text}</p>
                </div>
            </div>
        </div>
    )
}
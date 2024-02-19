import './one-cart.css'


export default function ItemsInCart({ img, word, world }) {
    return (
        <div className='wasnot'>
            <img src={img} alt="" className="was" />
            <div className="white">
                <h4>{word}</h4>
                <p>{world}</p>
            </div>
        </div>
    )
}
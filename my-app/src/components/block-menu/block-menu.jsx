import './block-menu.css'

export default function BlockInCart ({img, name, mession}) {
    return(
        <div className='photo-nam'>
            <div><img src={img} alt="" className='photo-names'/></div>
            <p className='p-name'>{name}</p>
            <p className='p-mession'>{mession}</p>
        </div>
    )
}
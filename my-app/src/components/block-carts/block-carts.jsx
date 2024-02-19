import img26 from '../img/26.png'
import img27 from '../img/27.svg'
import img28 from '../img/20.svg'
import img25 from '../img/25.png'
import './block-carts.css'

export default function BlockCarts() {
    return (
        <div>
            <div className="text">
                <p>Quis pretium vitae suspendisse.</p>
                <h1>Что говорят наши клиенты</h1>
            </div>
            <div className='block-carts'>
                <div className="imagge">
                    <div><img src={img25} alt=""  className='blueimage' /></div>
                    <div className='imagetext'><p className="p_block-carts">Timur o</p>
                    <p className='p_carts'>Quis fringilla convallis et vitae volutpat at porttitor. <br /> sollicitudin aliquet in. <br />
                        Quis fringilla convallis et vitae volutpat at porttitor. Est tincidunt <br />
                        massa aliquam sed enim rhoncus. Id nullam sollicitudin aliquet in.
                    </p>
                    <p className='p_block-carts'>2023.08.21</p></div>
                </div>
                
                <div className='strelka'> 
                    <img src={img27} alt="" className='strelkaa'/>
                    <img src={img28} alt="" className='strelkaaaa'/>
                </div>
                <div><img src={img26} alt="" className='img_block-carts' /></div>
            </div>
        </div>
    )
}
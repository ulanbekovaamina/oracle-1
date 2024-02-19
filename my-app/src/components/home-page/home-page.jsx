import './home-page.css'
import phone from '../img/7.png'


export default function HomePages (){
    return(
        <div className='container_css'>
            <div className='image'>
                <h1 className='h1'>Dui sapien aliquet aliquam</h1>
                <p>Quis fringilla convallis et vitae volutpat at porttitor. Est tincidunt massa <br/>
                 aliquam sed enim rhoncus. Id nullam sollicitudin aliquet in. </p>
                 <button className='btn'>Связаться с нами</button>
                 <div><img src={phone} alt="" className='phone'/></div>
            </div>
        </div>
    )
}
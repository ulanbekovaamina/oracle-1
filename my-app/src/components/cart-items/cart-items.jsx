import './cart-items.css'
import img29 from '../img/29.svg'
import img30 from '../img/30.svg'


export default function CartItems() {
    return (
        <div className='container_css'>
        <footer className='footer'>
            <div className="footers">
                <div className="about1">
                    <h1>To contact us</h1>
                    <p>Habitant at sed tincidunt sapien. </p>
                    <form className='your' action="">
                        <label htmlFor="">Your E-mail</label>
                        <input type="text" placeholder='david@gmail.com' />
                    </form>
                    <form className='your' action="">
                        <label htmlFor="">Write anything</label>
                        <input type="text" placeholder='Felis id tincidunt pulvar ' />
                    </form>
                    <button>Send</button>
                </div>

                <div className="about2">
                    <p>Телефон:</p>
                    <a href="tel:+996 709 683 738">
                        +996 709 683 738
                    </a>
                    <a href="tel:+996 557 978 715">
                        +996 557 978 715
                    </a>
                    <nav>
                        <p>social media:  </p>
                        <img src={img29} alt="" className='img'/>
                        <img src={img30} alt="" className='img' />
                    </nav>
                </div>
                <div className=" about3">
                    <div>
                        <p>E-mail:</p>
                        <h5>contact@yrhome.com</h5>
                        <p>Adress:</p>
                        <h5>contact@yrhome.com</h5>
                    </div>
                </div>
            </div>
            <div className='footer-end'><p>Copyright2023 All Rights Recerved</p></div>
        </footer>
        </div>
    )
}
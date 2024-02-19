import { NavLink } from 'react-router-dom';
import logo from '../img/1.png'
import img2 from '../img/2.png'
import './header.css'
import HomePages from '../home-page/home-page';


function Header() {
    return (
        <div className='container_css'>
            <div className="header">
                <div className='header_css'> 
                    <div className="nav">
                    <div className="logotive"><img src={logo} alt="" /></div>
                        <NavLink to='/'>Главная</NavLink>
                        <NavLink to='/О компании'>О компании</NavLink>
                        <NavLink to='/Услуги'>Услуги</NavLink>
                        <NavLink to='/Контакты'>Контакты</NavLink>
                        <NavLink >+996 700 453 456</NavLink>
                    </div>
                </div>
                   

            </div>
            <div>{<HomePages />}</div>
        </div>
    )
}
export default Header;
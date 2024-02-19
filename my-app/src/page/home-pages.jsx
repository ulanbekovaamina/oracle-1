import BlockItem from "../components/block-items/block-items";
import { items } from "../datas/datas";
import './home-pages.css'



export default function HomePage() {
    return (
        <div className="rel">
            <div className="text-3">
                <p>Quis pretium vitae suspendisse.</p>
                <h1>Наши курсы</h1>
            </div>
            <div className="image2"></div>

            <div style={{ display: 'flex', gap:'20px', width: '950px', marginTop: '40px' }}>
                    {
                        items.map(el => <BlockItem fetch={el.fetch} img={el.img} />)
                    }
                </div>
        </div>
    )
}
import { could } from "../../datas/datas";
import BlockInCart from "../block-menu/block-menu";


export default function BlockCart () {
    return(
         <div>
            <div className="text">
                <p>Quis pretium vitae suspendisse.</p>
                <h1>Наши менторы</h1>
            </div>
            <div style={{display:'flex', width:'1100px'}}>
                {
                    could.map(cold => <BlockInCart img={cold.img} name={cold.name} mession={cold.mession}/>)
                }
            </div>
         </div>
    )
}
import BlockCart from "./components/block-cart/block-cart";
import BlockCarts from "./components/block-carts/block-carts";
import BlockItems from "./components/block-item/block-item";
import CartBlock from "./components/cart-block/cart-block";
import CartItems from "./components/cart-items/cart-items";
import CartMenu from "./components/cart-menu/cart-menu";
import Header from "./components/header/header";
import HomePage from "./page/home-pages";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <CartBlock />
      <CartMenu/>
      <BlockItems/>
      <BlockCart/>
      <BlockCarts/>
      <CartItems/>
    </div>
  );
}

export default App;

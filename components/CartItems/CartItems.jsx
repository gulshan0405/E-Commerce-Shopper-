import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalcartAmount,all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);

  return (
    <div style={{margin:"100px 170px"}} className="cartItems">
      <div style={{display:"grid", gridTemplateColumns:"2fr 2fr 1fr 1fr 1fr 1fr"}} className="cartItems-formate-main gap-[75px] py-[25px] px-0 items-center text-[18px] text-[#454545] font-semibold ">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] border-0  " />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <>
              <div key={e.id}  style={{display:"grid", gridTemplateColumns:"2fr 2fr 1fr 1fr 1fr 1fr"}} className="cartItems-formate-main gap-[75px] py-[25px] px-0 items-center text-[18px] text-[#454545] font-semibold">
              <img style={{width:"300px"}} src={e.image} alt="" className="carticon-product-icon h-[300px]" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <div className="cartitems-quantity flex">
                <button
                  onClick={() => addToCart(e.id)}
                  className="quantity-btn increment bg-green-300 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition"
                >
                  +
                </button>
                <span className=" font-bold py-2 px-4 rounded">{cartItems[e.id]}</span>
                <button
                  onClick={() => {
                    if (cartItems[e.id] > 1) {
                      removeFromCart(e.id);
                    }
                  }}
                  className="quantity-btn decrement  bg-red-300 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition"
                >
                  -
                </button>
              </div>
              <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
              <img
                src={remove_icon}
                onClick={() => removeFromCart(e.id)}
                alt=""
                className="remove-icon"
              />

            </div>
            <hr className="h-[3px] bg-[#e2e2e2] border-0  " />

            </>
            
          );
        }
        return null;
      })}
      <div style={{margin:"100px 0px"}} className="cart-items-down flex ">
        <div style={{marginRight:"200px"}} className="cart-items-total flex-1 flex flex-col gap-[40px]">
            <h1>Cart Total</h1>
            <div>
                <div className="flex justify-between py-[15px] px-0">
                    <p>Subtotal</p>
                    <p>${getTotalcartAmount()}</p>
                </div>
                <hr />
                <div className="flex justify-between py-[15px] px-0">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="flex justify-between py-[15px] px-0">
                   <h3>Total</h3>
                   <h3>${getTotalcartAmount()}</h3>
                </div>
            </div>
            <button className="w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-[16px] font-semibold cursor-pointer ">PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promocode flex-1 text-[16px] font-medium">
  <p className="text-[#555] pl-2 pb-2">If you have the promo code, Enter it here</p>
  <div className="cart-item-promo-box w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] flex items-center rounded-lg">
    <input
      className="border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px] px-2"
      type="text"
      placeholder="Promo Code"
    />
    <button
      className="ml-auto px-5 py-2 text-[16px] bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition ease-in-out duration-200"
    >
      Submit
    </button>
  </div>
</div>
      </div>
    </div>
  );
};

export default CartItems;

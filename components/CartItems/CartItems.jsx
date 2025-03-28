import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
import { IoMdRemoveCircle } from "react-icons/io";


const CartItems = () => {
  const { getTotalcartAmount, all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);

  return (
    <div className="cartItems mx-auto p-4 md:p-8 lg:p-16">
      {/* Cart Table Header */}
      <div className=" grid-cols-6 gap-2 py-4 px-0 text-sm md:text-base text-gray-700 font-semibold hidden md:grid">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[2px] bg-gray-200" />

      {/* Cart Items */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="cart-item grid grid-cols-6 gap-2 py-4 px-0 text-sm md:text-base text-gray-700 items-center">
              <img className="col-span-6 md:col-span-1 w-[150px] max-h-[250px] mx-auto" src={e.image} alt={e.name} />
              <p className="col-span-6 md:col-span-1 text-center">{e.name}</p>
              <p className="col-span-6 md:col-span-1 text-center">${e.new_price}</p>
              <div className="col-span-6 md:col-span-1 flex justify-center items-center gap-2">
                <button
                  onClick={() => addToCart(e.id)}
                  className="bg-green-300 text-white font-bold py-1 px-3 rounded hover:bg-green-600 transition"
                >
                  +
                </button>
                <span className="font-bold">{cartItems[e.id]}</span>
                <button
                  onClick={() => {
                    if (cartItems[e.id] > 1) {
                      removeFromCart(e.id);
                    }
                  }}
                  className="bg-red-300 text-white font-bold py-1 px-3 rounded hover:bg-red-600 transition"
                >
                  -
                </button>
              </div>
              <p className="col-span-6 md:col-span-1 text-center">${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
              <IoMdRemoveCircle   
                    onClick={() => removeFromCart(e.id)}
                className="col-span-6 md:col-span-1 w-6 h-6 mx-auto  cursor-pointer"/>
            </div>
          );
        }
        return null;
      })}
      <hr className="h-[2px] bg-gray-200 mt-4" />

      {/* Cart Total Section */}
      <div className="cart-total flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mt-8">
        {/* Total Summary */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Cart Total</h2>
          <div>
            <div className="flex justify-between py-2">
              <p>Subtotal</p>
              <p>${getTotalcartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-2">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-2">
              <h3>Total</h3>
              <h3>${getTotalcartAmount()}</h3>
            </div>
          </div>
          <button className="w-full lg:w-auto bg-red-500 text-white text-sm font-semibold py-2 px-6 rounded hover:bg-red-600 transition">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code Section */}
        <div className="promo-code w-full lg:w-1/2">
          <p className="text-sm text-gray-600">If you have a promo code, enter it here:</p>
          <div className="flex items-center gap-2 mt-2">
            <input
              className="flex-1 border border-gray-300 rounded p-2 text-sm outline-none"
              type="text"
              placeholder="Promo Code"
            />
            <button className="bg-black text-white text-sm font-semibold py-2 px-4 rounded hover:bg-gray-800 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

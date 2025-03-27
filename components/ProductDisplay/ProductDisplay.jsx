import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} =useContext(ShopContext)
  return (
    <div style={{ margin: "2rem 11rem" }} className="flex ">
      <div className="productdisplay-left flex gap-[17px]">
        <div className="productdisplay-img-list flex flex-col gap-[16px]">
          <img className="h-[144px]" src={product.image} alt="" />
          <img className="h-[144px]" src={product.image} alt="" />
          <img className="h-[144px]" src={product.image} alt="" />
          <img className="h-[144px]" src={product.image} alt="" />
        </div>
        <div className="productdisplay-img w-[586px] ">
          <img
            style={{ height: "625px" }}
            className="productdisplay-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div
        style={{ margin: "0rem 2rem" }}
        className="productdisplay-right flex flex-col  "
      >
        <h1 className="text-[#3d3d3d] text-[40px] text-bold ">
          {product.name}
        </h1>
        <div className="productdisplay-right-star flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[16px]">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div
          style={{ margin: "2rem 0rem" }}
          className="productdisplay-right-price flex gap-[30px] text-[24px] font-bold  "
        >
          <div className="productdisplay-right-price-old text-[#818181] line-through ">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new text-[#ff4141]">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A whisper of midnight blue silk, this dress drapes like liquid
          moonlight, catching the light with a subtle, ethereal sheen. Delicate,
          hand-stitched silver threads trace floral patterns along the neckline
          and hem, adding a touch of ancient elegance.
        </div>
        <div className="productdisplay-right-size">
          <h1
            style={{ marginTop: "55px" }}
            className="text-[#656565] text-[20px] font-semibold "
          >
            Select Size
          </h1>
          <div
            style={{ margin: "0.3rem 0rem" }}
            className="productdisplay-right-size flex gap-[20px] "
          >
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[#ebebeb] rounded-[3px] cursor-pointer ">
              S
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[#ebebeb] rounded-[3px] cursor-pointer ">
              M
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[#ebebeb] rounded-[3px] cursor-pointer ">
              L
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[#ebebeb] rounded-[3px] cursor-pointer ">
              XL
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[#ebebeb] rounded-[3px] cursor-pointer ">
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={()=>{addToCart(product.id)}}
          style={{ marginBottom: "40px" }}
          className="py-[20px] px-[40px] w-[200px] text-[16px] font-semibold text-white bg-[#ff4141]  border-none outline-none cursor-pointer "
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category mt-[10px]">
          <span className="font-medium">Category :</span>{" "}
          Woment,T-shirt,Crop-Top
        </p>
        <p className="productdisplay-right-category mt-[10px]">
          <span className="font-medium">Tags :</span> Morden,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

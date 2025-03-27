import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (

    <div style={{ margin: "2rem 11rem" }} className="flex items-center gap-[8px] text-[#5e5e5e] text-[16px] font-semibold capitalize">
  HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
  {product.category} <img src={arrow_icon} alt="" /> {product.name}
</div>
  );
};

export default Breadcrum;

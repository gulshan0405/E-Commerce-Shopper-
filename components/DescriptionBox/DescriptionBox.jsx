const DescriptionBox = () => {
  return (
    <div style={{margin:"120px 170px"}} className="descriptionbox ">
      <div className="descriptionbox-navigator">
        <div className="flex gap-2">
        <div style={{border:"1px solid #d0d0d0"}} className="descriptionbox-nav-box flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] ">Description</div>
        <div  style={{border:"1px solid #d0d0d0"}} className="descriptionbox-nav-box-fade bg-[#fbfbfb] text-[#555] flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px]  ">Review(122)</div>
        </div>
       
        <div  style={{border:"1px solid #d0d0d0", marginTop:"10px"}} className="descriptionbox-description flex flex-col gap-[25px] p-[48px] pb-[70px] ">
          <p>
            Shopper is your ultimate online shopping destination, offering a
            diverse range of products, from trendy fashion and cutting-edge
            electronics to home essentials and unique handmade items. With
            exclusive deals, fast delivery, secure payments, and 24/7 customer
            support, we ensure a seamless shopping experience. Discover premium
            quality, unbeatable prices, and convenience all in one place. Shop
            now and redefine the way you shop online!
          </p>
          <p>
            Explore new arrivals, grab seasonal discounts, and enjoy a
            hassle-free return policy. Join thousands of happy customers and
            make Shopper your go-to shopping hub today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;

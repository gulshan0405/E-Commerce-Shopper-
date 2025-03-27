import exclusive_image from '../assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="offers w-full h-[60vh] flex m-auto py-0 px-12 lg:px-36 mb-[140px] bg-gradient-to-r from-[#fde1ff] to-[#e1ffea]">
      {/* Left Section */}
      <div className="offers-left flex-1 flex flex-col justify-center items-start space-y-4">
        <h1 className="text-4xl font-bold text-[#171717]">Exclusive</h1>
        <h1 className="text-4xl font-bold text-[#171717]">Offers For You</h1>
        <p className="text-lg text-gray-700">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="px-6 py-2 bg-[#ff4141] text-white rounded-lg shadow-md hover:bg-[#ff4120] transition-all">
          Check Now
        </button>
      </div>

      {/* Right Section */}
      <div className="offers-right flex-1 flex justify-center items-center">
        <img
          src={exclusive_image}
          alt="Exclusive Offers"
          className="w-[50%] max-w-[300px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Offers;

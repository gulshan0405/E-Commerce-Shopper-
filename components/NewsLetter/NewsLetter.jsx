

const NewsLetter = () => {
  return (
    <>
    <div className="flex justify-center">
    <div className="news-letter w-[75%] h-[40vh] flex flex-col items-center justify-center m-auto py-0 px-[150px] mb-[150px] bg-gradient-to-r from-[#fde1ff] to-[#e1ffea] gap-8">
<h1 className="text-[#454545] text-[55px] font-semibold ">Get Exclusive Offer On Your Email</h1>
<p className="text-[#454545] text-[20px] ">Subscribe to our news letter and stay updated</p>
<div className="flex items-center bg-white w-[730px] h-[70px] rounded-full shadow-md border border-gray-300 overflow-hidden">
  <input
    type="email"
    placeholder="Enter your email"
    className="flex-1 h-full pl-6 text-gray-700 font-[poppins] text-[16px] border-none outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button className="w-[210px] h-full bg-black text-white transition-all ">
    Subscribe
  </button>
</div>

    </div>
    </div>
      
    </>
  
  )
}

export default NewsLetter
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="loginsignup w-[100%] h-[80vh] pt-[100px] bg-[#fce3fe] flex justify-center ">
      <div className="loginsignup-container w-[500px] h-[500px] bg-white  py-[40px] px-[60px] ">
        <h1 className=" py-[20px] mx-[0px] text-4xl ">Sign Up</h1>
        <div className="loginsignup-fields flex flex-col gap-[29px] mt-[30px]  ">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <div className='h-[30px]'></div>
        <button className='w-[380px] h-[52px] text-white bg-[#ff4141] text-[24px] font-medium cursor-pointer border-none '>Continue</button>
        <div className='h-[15px]'></div>
        <p className="loginsignup-login text-[#5c5c5c] text-[18px] font-medium  ">Already have an account <span className='text-[#ff4141] font-semibold'>Login Here</span></p>
        <div className='h-[10px]'></div>
        <div className="loginsignup-agree flex items-center text-[#5c5c5c] text-[16px] gap-2 font-medium">
  <input 
    type="checkbox" 
    name="agreement" 
    id="agreement" 
    className="w-4 h-4 accent-blue-500 cursor-pointer" 
  />
  <label htmlFor="agreement" className="cursor-pointer">
    By continuing, I agree to the <a href="/terms" className="text-blue-500 hover:underline">Terms of Use</a> and <a href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</a>.
  </label>
</div>
      </div>
    </div>
  )
}

export default LoginSignup
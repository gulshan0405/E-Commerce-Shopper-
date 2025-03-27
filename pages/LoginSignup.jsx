import './LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className="loginsignup w-full h-screen pt-20 bg-[#fce3fe] flex justify-center items-center">
      <div className="loginsignup-container w-[90%] max-w-[500px] bg-white rounded-lg shadow-lg py-10 px-8">
        <h1 style={{marginBottom:"20px"}} className="text-3xl font-semibold text-center text-gray-800">Sign Up</h1>
        <form className="loginsignup-fields flex flex-col gap-6 mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full h-12 px-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-12 px-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 px-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full h-12 bg-[#ff4141] text-white text-lg font-medium rounded-lg shadow-md hover:bg-[#e63b3b] transition-all duration-200"
          >
            Continue
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-[#ff4141] font-semibold hover:underline">
            Login Here
          </a>
        </p>
        <div className="loginsignup-agree flex items-start mt-6 text-sm text-gray-600">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            className="w-4 h-4 mt-1 mr-2 accent-blue-500 cursor-pointer"
          />
          <label htmlFor="agreement" className="cursor-pointer">
            By continuing, I agree to the{' '}
            <a href="/terms" className="text-blue-500 hover:underline">
              Terms of Use
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
            .
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

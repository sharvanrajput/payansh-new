import React, { useState } from "react";

const Signuplogin = () => {

  const [isSignUp, setIsSignUp] = useState(false);

  const [signname , setSignname] =  useState("");
  const [signmail , setSignmail] =  useState("");
  const [signpass , setSignpass] =  useState("");
  const [logpass , setLogpass] =  useState("");
  const [logmail , setLognmail] =  useState("");

  const handleSignname = (e)=> {
    setSignname(e.target.value);
  }
  const handleSignemail = (e)=> {
    setSignmail(e.target.value);
  }
  const handleSignPassword = (e)=> {
    setSignpass(e.target.value);
  }
  const handleLogmail = (e)=> {
    setLognmail(e.target.value);
  }
  const handleLogpass = (e)=> {
    setLogpass(e.target.value);
  }

  return (
    <>
      <section className="loginsignup">



      <div className="form_toggle_button_phone d-flex justify-content-center d-md-none d-block">
            <button className="btn btn-success" onClick={() => setIsSignUp(false)}>Sign In</button>
            <button className="btn btn-success ms-3" onClick={() => setIsSignUp(true)}>Sign Up</button>
          </div>
        <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
         
          <div className="form-container sign-up-container d-md-block ">
            <form>
              <h1>Sign Up</h1>

              <span>or use your email for registration</span>
              <input onChange={(e)=>{ handleSignname(e)}} value={signname} type="text" placeholder="Name" />
              <input onChange={(e)=>{handleSignemail(e)}} value={signmail} type="email" placeholder="Email" />
              <input onChange={(e)=>{handleSignPassword(e)}} value={signpass} type="password" placeholder="Password" />
              <button className="mt-3">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container d-md-block  ">
            <form>
              <h1>Sign In</h1>

              <span>or use your email account</span>
              <input onChange={(e) => handleLogmail(e)} value={logmail} type="email" placeholder="Email" />
              <input onChange={(e) => handleLogpass(e)} value={logpass} type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container d-md-block d-none">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To stay connected with us please login with your personal info</p>
                <button className="ghost" onClick={() => setIsSignUp(false)}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start your journey with us</p>
                <button className="ghost" onClick={() => setIsSignUp(true)}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default Signuplogin;

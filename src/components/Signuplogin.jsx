import React, { useState } from "react";

const Signuplogin = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center">{isSignup ? "Sign Up" : "Login"}</h2>
        
        <form>
          {isSignup && (
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" required />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" required />
          </div>

          {isSignup && (
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm password" required />
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="text-center mt-3">
          {isSignup ? (
            <p>
              Already have an account?{" "}
              <span
                className="text-primary cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => setIsSignup(false)}
              >
                Login
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span
                className="text-primary cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => setIsSignup(true)}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signuplogin;

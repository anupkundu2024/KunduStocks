import React, { useState } from "react";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg border-0 rounded-4"
        style={{ width: "400px" }}
      >
        {/* Tabs */}
        <div className="card-header bg-white border-0 d-flex justify-content-center">
          <button
            className={`btn ${
              isLogin ? "btn-dark" : "btn-outline-secondary"
            } me-2`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`btn ${!isLogin ? "btn-dark" : "btn-outline-secondary"}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <div className="card-body">
          {isLogin ? (
            // Login Form
            <>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <label className="form-label">Password</label>
                <a href="/" className="small text-decoration-none">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Enter your password"
              />

              <button className="btn btn-dark w-100 mb-3">Log In</button>

              <div className="text-center text-muted mb-3">OR</div>

              <button className="btn btn-outline-dark w-100 mb-2">
                <i className="bi bi-google me-2"></i> Continue with Google
              </button>
              <button className="btn btn-outline-dark w-100 mb-2">
                <i className="bi bi-apple me-2"></i> Continue with Apple
              </button>
              <button className="btn btn-outline-dark w-100 mb-2">
                <i className="bi bi-currency-bitcoin me-2"></i> Continue with
                Binance
              </button>
              <button className="btn btn-outline-dark w-100">
                <i className="bi bi-wallet2 me-2"></i> Continue with Wallet
              </button>

              <p className="text-center mt-3">
                Don’t have an account?{" "}
                <span
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsLogin(false)}
                >
                  Sign up
                </span>
              </p>
            </>
          ) : (
            // Signup Form
            <>
              <button className="btn btn-outline-dark w-100 mb-2">
                <i className="bi bi-google me-2"></i> Continue with Google
              </button>
              <button className="btn btn-outline-dark w-100 mb-2">
                <i className="bi bi-apple me-2"></i> Continue with Apple
              </button>
              <button className="btn btn-outline-dark w-100 mb-2">
                <i className="bi bi-currency-bitcoin me-2"></i> Continue with
                Binance
              </button>
              <button className="btn btn-outline-dark w-100 mb-3">
                <i className="bi bi-wallet2 me-2"></i> Continue with Wallet
              </button>

              <div className="text-center text-muted mb-3">OR</div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>

              <button className="btn btn-dark w-100 mb-3">
                Create an account
              </button>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="updatesCheck"
                />
                <label
                  className="form-check-label small text-muted"
                  htmlFor="updatesCheck"
                >
                  Please keep me updated by email with the latest news, rewards,
                  and updates.
                </label>
              </div>

              <p className="text-center mt-3">
                Already have an account?{" "}
                <span
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </p>
            </>
          )}

          <p className="text-center text-danger small mt-4 ">
            🔒 This is only frontend. Backend connection is coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;

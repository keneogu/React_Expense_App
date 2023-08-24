import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../reducers/authContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const { isAuthenticate, error, loading } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticate) {
      navigate("/");
    }
    if (error) {
      alert.error(error);
    }
  }, [isAuthenticate, error, alert]);

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(username, email, password);
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="row wrapper">
            <div className="col-10 col-lg-5">
              <form className="shadow-lg" onSubmit={submitHandler}>
                <h1 className="mb-3">Login</h1>
                <div className="form-group">
                  <label
                    htmlFor="username"
                    className={
                      email.length !== 0 ? "text-gray-500" : "text-black"
                    }
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className={
                      email.length !== 0 ? "border-gray-500" : "border-black"
                    }
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={email.length !== 0}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="email_field"
                    className={
                      username.length !== 0 ? "text-gray-500" : "text-black"
                    }
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email_field"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={username.length !== 0}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password_field">Password</label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py-3"
                >
                  LOGIN
                </button>

                <Link to="/register" className="float-right mt-3">
                  New User?
                </Link>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;

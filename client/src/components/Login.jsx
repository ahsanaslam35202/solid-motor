import React from "react";
import { Redirect } from "react-router";
import { userLogin, userSignup } from "./../services/userService";

const Login = (props) => {
  const [email, setEmail] = React.useState({ value: "", error: "" });
  const [password, setPassword] = React.useState({ value: "", error: "" });

  const handleLogin = async (e) => {
    await userLogin({
      email,
      password,
    }).then(() => {
      props.history.push("/");
    });
  };

  return (
    <div>
      <div className="mt-80">
        <div className="row mt-0">
          <div className="col-md-6 d-flex align-items-center justify-content-center sign-in-container">
            <div>
              <h1 className="w-100 text-center h1-white">
                <strong>Do Not Have An Account?&nbsp;</strong>
              </h1>
              <div className="d-flex justify-content-center">
                <a href="./signup"></a>
                <button
                  className="btn btn-primary sign-in-button"
                  type="button"
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="container mb-auto">
              <form
                className="border rounded shadow regForm"
                id="regForm"
                method="post"
                data-toggle="modal"
              >
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "-20px",
                    opacity: 0,
                  }}
                >
                  <span className="step" />
                  <span className="step" />
                </div>
                <div className="tab" style={{ textAlign: "center" }}>
                  <h5 className="text-center mt-30">Login Here</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore e
                  </p>
                  <div className="form-group mt-30">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                      value={email.value}
                      onChange={(e) => {
                        setEmail({ value: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      value={password.value}
                      onChange={(e) => {
                        setPassword({ value: e.target.value });
                      }}
                      required
                    />
                  </div>
                </div>
                <div
                  className="mb-auto w-100"
                  style={{ float: "right", marginBottom: "0px" }}
                >
                  <div className="form-row" style={{ paddingBottom: "0px" }}>
                    <div className="col-md-6">
                      <button
                        className="btn btn-primary next"
                        type="button"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

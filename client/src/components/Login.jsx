import React from "react";
import { Redirect } from "react-router";
import { userLogin, userSignup } from "./../services/userService";
import { isLoggedin, logout } from "../services/userService";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "40%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    borderWidth: "0px",
    borderRadius: "20px",
    boder: "none",
  },
};

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [err_msg, setErr_msg] = React.useState("");
  const [email_err, setEmail_err] = React.useState(true);

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validate(email) {
    if (!validateEmail(email)) {
      return false;
    } else {
      return true;
    }
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  if (isLoggedin()) {
    props.history.push("/");
  }

  const handleLogin = async (e) => {
    if (email == "" || password == "") {
      if (email == "") {
        setErr_msg("Email cannot be Empty");
        openModal();
      } else if (password == "") {
        setErr_msg("Password cannot be Empty");
        openModal();
      }
    } else if (!validate(email)) {
      setErr_msg("Invalid Email !");
      openModal();
    } else {
      await userLogin({
        email,
        password,
      })
        .then(() => {
          props.history.push("/");
        })
        .catch(() => {
          setErr_msg("Email or Password is Wrong");
          openModal();
        });
    }
  };

  return (
    <div>
      {/* Modal */}
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div
            style={{
              padding: "30px",
              background: "#6ccfff",
              borderRadius: "20px",
              paddingBottom: "70px",
              width: "100%",
              height: "50vh",
            }}
          >
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-primary"
                type="button"
                style={{
                  background: "rgb(189,221,255)",
                  color: "rgb(52,52,52)",
                }}
                onClick={closeModal}
              >
                X
              </button>
            </div>
            <h4
              className="w-100 text-center thankyou-heading"
              style={{ fontSize: "24px" }}
            >
              {err_msg}
            </h4>
          </div>
        </Modal>
      </div>
      {/* +++++++++++++++++++++++++++++++++++++++++++++ */}
      <div className="mt-0">
        <div className="row mt-0">
          <div className="col-md-6 d-flex align-items-center justify-content-center sign-in-container login-left-container">
            <div>
              <div className="d-flex justify-content-center">
                <img
                  src="assets/img/Logo.png"
                  style={{ marginBottom: "10px" }}
                  alt=""
                />
              </div>

              <h1 className="w-100 text-center h1-white">
                <strong>Do Not Have An Account?&nbsp;</strong>
              </h1>
              <div className="d-flex justify-content-center">
                <a href="./signup">
                  <button
                    className="btn btn-primary sign-in-button"
                    type="button"
                  >
                    Signup
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center login-from-container">
            <div className="container">
              <form className="border rounded shadow regForm" id="regForm">
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "-20px",
                    opacity: 0,
                  }}
                >
                  <span className="" />
                  <span className="" />
                </div>
                <div className="" style={{ textAlign: "center" }}>
                  <h5 className="text-center mt-30">Login Here</h5>

                  <div className="form-group mt-30">
                    <input
                      className="form-control"
                      type="Email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      style={{ height: "50px" }}
                      required
                    />
                    <p
                      className={
                        email_err
                          ? "d-none w-100 text-left"
                          : "d-flex w-100 text-left"
                      }
                    >
                      Email is not valid
                    </p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
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

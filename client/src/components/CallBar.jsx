const CallBar = () => {
  return (
    <div className=" dektop-d-none">
      <div
        className="d-flex"
        style={{ width: "100%", height: "50PX", background: "#0cbdff" }}
      >
        <div className="d-flex w-100 align-items-center justify-content-around ">
          <p style={{ marginBottom: "0px", color: "white", fontWeight: 600 }}>
            Questions? Call us!
          </p>
          <a
            href="tel:(469) 929-6161"
            style={{
              filter: "invert(0%)",
              color: "white",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            <img
              src="assets/img/phone-call.svg"
              style={{
                maxHeight: "24px",
                height: "16px",
                filter: "invert(100%)",
                marginRight: "5px",
                paddingBottom: "1px",
              }}
            />
            (469) 929-6161
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallBar;

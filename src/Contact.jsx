import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="intro" style={{ marginTop: "-50px" }}>
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 text-start order-2 order-md-1 my-2">
              <h2
                className="my-2"
                style={{ color: "#5465ff", marginLeft: "22px" }}
              >
                Contact Us
              </h2>

              <div className="container">
                <form>
                  <div className="my-4">
                    <label className="form-label">Name : </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="my-4">
                    <label className="form-label">Email : </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="my-4">
                    <label className="form-label">Query : </label>
                    <input type="text" className="form-control" />
                  </div>
                  <button className="btn btn-outline-primary">Submit</button>
                </form>
              </div>
            </div>

            <div className="col-md-5 text-center order-1 order-md-2 ms-md-5">
              <img
                className="img-fluid floating"
                src="https://cdni.iconscout.com/illustration/premium/thumb/artificial-intelligence-3454686-2918395.png"
                alt=""
              />
            </div>
          </div>

          <div className="text-center my-5">
            <p className="text-secondary">
              Reach out to us at <strong>help@alphatech.in</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

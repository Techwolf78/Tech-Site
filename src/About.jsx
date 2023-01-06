import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <section id="intro" style={{ marginTop: "-50px" }}>
          <div className="container-lg">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-5 text-center text-md-start order-1 order-md-1">
                <h2 className="my-2" style={{ color: "#5465ff" }}>
                  About Us
                </h2>
                <h5 className="fw-lighter my-4 text-secondary">
                  AlphaTech is a leading technology company that has been at the
                  forefront of innovation for over a decade. We specialize in
                  developing cutting-edge solutions for a wide range of
                  industries, including healthcare, finance, and education.
                  <br />
                  <br />
                  Our team is made up of some of the brightest minds in the
                  industry, all with a passion for using technology to make a
                  positive impact on the world. From our software engineers and
                  data scientists to our designers and product managers, we are
                  all dedicated to creating products that are intuitive,
                  reliable, and effective.
                </h5>
              </div>

              <div className="col-md-5 text-center order-2 order-md-2 ms-md-5 mb-5">
                <img
                  className="img-fluid floating"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/artificial-intelligence-programming-3454687-2918396.png"
                  alt=""
                />
              </div>
            </div>

            <div className="text-center my-3">
              <p style={{ color: "#5465ff" }}>
                It is only when they go wrong that machines remind you how
                powerful they are <br /> - Clive James
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

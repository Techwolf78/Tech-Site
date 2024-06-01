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
                TechLumina is a premier tech company specializing in cutting-edge web development and app development services. Our team of skilled developers is committed to delivering scalable and robust solutions tailored to meet the unique needs of our clients.
                  <br />
                  <br />
                  In addition to web and app development, we also provide exceptional UI/UX design services to ensure that our clients' products feature visually appealing and intuitive interfaces. Our designers collaborate closely with our development team to create seamless and user-friendly experiences.
                  <br />
                  <br />
                  Our web development services encompass a wide array of technologies, including HTML, CSS, JavaScript, and various frameworks such as Angular, React, and Vue.js. We have a proven track record of delivering successful web projects for small businesses, enterprises, and startups.
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
                "The best way to predict the future is to invent it." <br /> - Alan Kay
  
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const Products = () => {
  return (
    <div>
      <section id="products" style={{ marginTop: "-40px" }}>
        <div className="container-lg">
          <div className="text-center">
            <h2 style={{ color: "#5465ff" }}>Our Services</h2>

          </div>

          <div className="container-lg text-lead text-center mt-4 fw-lighter text-secondary">
            <p>
            TechLumina is a premier tech company specializing in cutting-edge web development and app development services. Our team of skilled developers is committed to delivering scalable and robust solutions tailored to meet the unique needs of our clients. In addition to web and app development, we also provide exceptional UI/UX design services to ensure that our clients' products feature visually appealing and intuitive interfaces. Our designers collaborate closely with our development team to create seamless and user-friendly experiences. Our web development services encompass a wide array of technologies, including HTML, CSS, JavaScript, and various frameworks such as Angular, React, and Vue.js. We have a proven track record of delivering successful web projects for small businesses, enterprises, and startups.
            </p>
          </div>
          <div className="container-lg text-lead text-center mt-4 fw-lighter text-secondary"><h4 className="tex-lead" style={{ color: "blue" }}>We offer a wide range of services</h4></div>
          <div className="row my-1 align-items-center justify-content-center g-5">
            <div className="col-10 col-lg-4 col-xl-3">
              <div className="card text-center border-1 shadow">
                <div className="card-header fw-bold">Web Development</div>
                <div className="card-body py-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/8901/8901530.png"
                    alt=""
                    className="img-fluid w-25 h-25 m-3"
                  />
                  <p className="card-text mx-5 text-muted">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#" className="btn btn-outline-primary">
                    Check Out
                  </a>
                </div>
              </div>
            </div>

            <div className="col-10 col-lg-4 col-xl-3">
              <div className="card text-center border-1 shadow">
                <div className="card-header fw-bold">App Development</div>
                <div className="card-body py-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/9011/9011110.png"
                    alt=""
                    className="img-fluid w-25 h-25 m-3"
                  />
                  <p className="card-text mx-5 text-muted">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#" className="btn btn-outline-primary">
                    Check Out
                  </a>
                </div>
              </div>
            </div>

            <div className="col-10 col-lg-4 col-xl-3">
              <div className="card text-center border-1 shadow">
                <div className="card-header fw-bold">Cloud Computing</div>
                <div className="card-body py-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/8901/8901623.png"
                    alt=""
                    className="img-fluid w-25 h-25 m-3"
                  />
                  <p className="card-text mx-5 text-muted">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#" className="btn btn-outline-primary">
                    Check Out
                  </a>
                </div>
              </div>
            </div>

            <div className="col-10 col-lg-4 col-xl-3">
              <div className="card text-center border-1 shadow">
                <div className="card-header fw-bold">Data Analysis</div>
                <div className="card-body py-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/8901/8901607.png"
                    alt=""
                    className="img-fluid w-25 h-25 m-3"
                  />
                  <p className="card-text mx-5 text-muted">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#" className="btn btn-outline-primary">
                    Check Out
                  </a>
                </div>
              </div>
            </div>

            <div className="col-10 col-lg-4 col-xl-3">
              <div className="card text-center border-1 shadow">
                <div className="card-header fw-bold">UI/UX Desiging</div>
                <div className="card-body py-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2546/2546578.png"
                    alt=""
                    className="img-fluid w-25 h-25 m-3"
                  />
                  <p className="card-text mx-5 text-muted">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#" className="btn btn-outline-primary">
                    Check Out
                  </a>
                </div>
              </div>
            </div>

            <div className="col-10 col-lg-4 col-xl-3">
              <div className="card text-center border-1 shadow">
                <div className="card-header fw-bold">Dev Ops</div>
                <div className="card-body py-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7991/7991055.png"
                    alt=""
                    className="img-fluid w-25 h-25 m-3"
                  />
                  <p className="card-text mx-5 text-muted">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#" className="btn btn-outline-primary">
                    Check Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div>
      <section id="intro">
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 text-center text-md-start order-2 order-md-1">
              <h2 className="my-3">
                Empowering innovation with cutting-edge technology solutions.
                Transforming the way you do business with
                <br />
                <strong style={{ color: "#5465ff" }}>TechLumina</strong>
              </h2>
              <h4 className="fw-lighter my-5 text-secondary">
                We are the team of talented devs !
              </h4>
              <button
                className="btn btn-outline-primary px-4 py-2"
                onClick={handleClick}
              >
                {/* <NavLink to="/products" className="">Get Started</NavLink> */}
                Get Started
              </button>
            </div>

            <div className="col-md-5 text-center order-1 order-md-2 ms-md-5 mb-5">
              <img
                className="img-fluid floating"
                src="https://cdni.iconscout.com/illustration/premium/thumb/ai-technology-development-3454684-2918393.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

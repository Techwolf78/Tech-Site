import React, { useEffect, useState } from "react";
import axios from "axios";

const Message = () => {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    //FETCH THE QUOTES
    axios.get("https://animechan.vercel.app/api/quotes").then((res) => {
      setQuotes(res.data);
    });
  }, []);

  return (
    <div>
      {/* DISPLAY QUOTES */}
      {/* {quotes && <div>{quotes.map((q) => (
        <div>
          <p>{q.quote}</p>
        </div>
      ))}</div>} */}

      <div className="container-lg">
        <div className="text-center my-3">
          <h2 style={{ color: "#5465ff", marginTop: "60px" }}>
            Message From Our Leaders
          </h2>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-md-7">
            {quotes && (
              <div>
                {quotes.map((q) => (
                  <div className="card text-center border-1 shadow mx-3 my-5">
                    <div className="card-header fw-bold">{q.character}</div>
                    <div className="card-body">
                      <p className="card-text">{q.quote}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

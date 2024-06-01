import React, { useEffect, useState } from "react";
import "./Message.css"; // Import CSS for styling (make sure to create this file)

const Message = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dummy quotes for demonstration
  useEffect(() => {
    const dummyQuotes = [
      {
        id: 1,
        character: "Michel Dawn",
        quote: "Web Development has opened up countless opportunities for businesses to establish a strong online presence.",
      },
      {
        id: 2,
        character: "Sam walter",
        quote: "App Development continues to revolutionize how we interact with technology, bringing convenience to our fingertips.",
      },
      {
        id: 3,
        character: "Michael Brown",
        quote: "Cloud Computing offers scalability and flexibility, enabling organizations to innovate and grow effortlessly.",
      },
      {
        id: 4,
        character: "Emma Davis",
        quote: "Data Analysis provides insights that empower decision-making, driving businesses towards success.",
      },
      {
        id: 5,
        character: "David Wilson",
        quote: "UI/UX Designing enhances user experience, making digital interactions intuitive and enjoyable.",
      },
      {
        id: 6,
        character: "Sophia Miller",
        quote: "DevOps bridges the gap between development and operations, fostering collaboration and accelerating delivery cycles.",
      },
    ];
    
    
    setQuotes(dummyQuotes);
  }, []);

  // Automatically move to the next quote every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change interval time as needed

    return () => clearInterval(interval);
  }, [quotes.length]);

  const nextQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="message-container">
       <h2 className="message-heading">Messages from our clients</h2>
      <div className="carousel">
        <div className="arrow left" onClick={prevQuote}>
          &#8249;
        </div>
        {quotes.map((quote, index) => (
          <div
            key={quote.id}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <div className="msgcard text-center border-1 shadow mx-3 my-5">
              <div className="msgcard-header fw-bold">{quote.character}</div>
              <div className="msgcard-body">
                <p className="msgcard-text">{quote.quote}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="arrow right" onClick={nextQuote}>
          &#8250;
        </div>
      </div>
      <div className="pagination">
        {quotes.map((quote, index) => (
          <span
            key={quote.id}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Message;

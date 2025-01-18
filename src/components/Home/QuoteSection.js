import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function QuoteSection() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://programming-quotes-api.herokuapp.com/Quotes/random");
        const data = await response.json();
        setQuote({ text: data.en, author: data.author });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quote:", error);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <Container fluid className="quote-section">
      <Container>
        {!loading && (
          <div className="quote-container">
            <FaQuoteLeft className="quote-icon left" />
            <p className="quote-text">{quote.text}</p>
            <FaQuoteRight className="quote-icon right" />
            <p className="quote-author">- {quote.author}</p>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default QuoteSection; 
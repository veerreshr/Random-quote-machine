import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [quote, setQuote] = useState("New quote on your way...");
  const [author, setAuthor] = useState("Author");
  useEffect(() => {
    callApi();
  }, []);
  function callApi() {
    axios({
      method: "GET",
      url: "https://type.fit/api/quotes",
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
      const quote = response.data[Math.floor(Math.random() * response.data.length)];
        setQuote(quote.text);
        setAuthor(quote.author);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="jumbotron  rounded ">
      <h1>
        Random-<span className="text-info">Quote</span>-Machine
      </h1>
      <blockquote className="blockquote mt-3">
        <p id="text" className="mb-2">
          {quote}
        </p>
        <footer className="blockquote-footer" id="author">
          {author}
        </footer>
      </blockquote>
      <div className="row mt-4">
        <button
          className="col-md-3 btn btn-info my-1 my-md-0 ml-md-3"
          id="new-quote"
          onClick={callApi}
        >
          New Quote
        </button>
        <div className="col-md-2"></div>
        <div className="col-md-3"></div>
        <a
          id="tweet-quote"
          href={`http://twitter.com/intent/tweet?text=${quote}                                                               - ${author}`}
          target="_blank"
          className="col-md-3 btn btn-primary  "
        >
          <i className="fa fa-twitter"></i> Tweet
        </a>
        <a
          id="tweet-quote"
          href={`https://api.whatsapp.com/send?text==${quote}                                                               - ${author}`}
          data-action="share/whatsapp/share"
          target="_blank"
          className="col-md-3 btn btn-primary  "
        >
          <i className="fa fa-whatsapp"></i> status
        </a>
      </div>
    </div>
  );
};

export default Card;

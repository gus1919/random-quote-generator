import { useEffect, useState } from "react";
import './App.css';

function App() {
const [quoteData, setQuoteData] = useState({})

useEffect(() => {
getQuote()
}, []);

const getQuote = ( ) => {
  fetch('https://api.quotable.io/random')
  .then((response) => {return response.json();})
  .then((data) => {
    setQuoteData({
      text: data.content,
      author: data.author
    })
  })
}

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">{quoteData.text}</p>
        <p id="author">{quoteData.author}</p>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        <a class="button" id="tweet-quote" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Start%20where%20you%20are.%20Use%20what%20you%20have.%20%20Do%20what%20you%20can.%22%20Arthur%20Ashe">
            <i class="fa fa-twitter"></i> 
          </a>
      </div>
    </div>
  );
}

export default App;

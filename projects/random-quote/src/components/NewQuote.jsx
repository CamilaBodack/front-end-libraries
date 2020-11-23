import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import quotes from './QuotesDB';

export default class Quotes extends Component {

    // QUOTES STATE

    state = {
        quote: quotes[0].quote,
        author: quotes[0].author
    }

    let randomInt = Math.floor(Math.random() * quotes.length);

    randomQuote(randomInt){
        this.setState((state) => {
            quote: quotes[randomInt].quote,
            author: quotes[randomInt].author
        });
    }


    render() {
        return (<div>
            <p id="text">{this.state.quote}</p>
            <p id="author">{this.state.author}</p>
            <button onClick={this.randomQuote}>New Quote</button>
        </div>)
    }
}

import React from 'react';
import axios from 'axios';
import WavyBackGround from '../components/WavyBackGround';
import Loading from '../components/Loading';
import TweetQuote from '../components/TweetQuote';


class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: 0,
            selectedQuote: undefined,
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        this._fetchQuotes();
    }

    _generateRandomNumber() {
        this.setState({
            randomNumber: Math.floor(Math.random() * 1642)
        });
    }

    _fetchQuotes() {
        this._generateRandomNumber();
        axios.get('https://type.fit/api/quotes')
            .then(AllQuotes => {
                // console.log(AllQuotes);
                let quotePisition = this.state.randomNumber;
                this.setState({
                    selectedQuote: AllQuotes.data[quotePisition],
                    loading: false,
                    error: false
                })
            }).catch(err => {
                console.log(err);
                this.setState({ error: err });
            })
    }

    render() {
        return (
            <>
                <WavyBackGround />
                <div id="quote-box" >

                    {this.state.loading ? (
                        <Loading />
                    ) : (
                            <>
                                <p id="text">{this.state.selectedQuote.text}</p>
                                <h3 id="author">-{this.state.selectedQuote.author}</h3>
                                <button id="new-quote" className="button" onClick={() => { this._fetchQuotes() }}>New Quote</button>
                                <TweetQuote quote={this.state.selectedQuote.text} author={this.state.selectedQuote.author} />
                            </>
                        )
                    }
                </div>
            </>
        );
    }
}

export default QuoteMachine;
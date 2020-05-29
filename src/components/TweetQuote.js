import React from 'react';

const TweetQuote = ({ quote, author }) => {
    console.log(quote);

    return (
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=fromQouteMachine&text="${quote}"-${author}`} className="tweet" target="_black">
            Tweet this
        </a>
    )
}
export default TweetQuote;
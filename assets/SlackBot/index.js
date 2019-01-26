// https://github.com/mishk0/slack-bot-api

const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
  token: '',
    name: 'instacrypto'
});

// Start Up
bot.on('start', () => {
    const params = {
        icon_emoji: ':speech_balloon:'
    };

    bot.postMessageToChannel('general', 'LIVE',
        params
    );
})

// Error Log
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', data => {
    if (data.type !== 'message') {
        return;
    }

    handleMessage(data.text);

});

// Response to data
function handleMessage(message) {

    if (message.includes(' !news')) {
        getNews(message);
    } else if (message.includes(' !price')) {
        cryptoCompare(message);
    } else if (message.includes(' !help')) {
        helpMessage();
    }
}

function getNews(message) {

    var splitMessage = message.split("_");

    var limit = splitMessage[1];
    console.log(limit);

    axios.get(`https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=6bd40a7cdac8479ba618547b5afe8085`).then(response => {

        for (var i = 0; i <= limit; i++) {

            var author = response.data.articles[i].author;

            var title = response.data.articles[i].title;

            var url = response.data.articles[i].url;

            const params = {

                icon_emoji: ':loudspeaker:'

            };

            bot.postMessageToChannel('general', `Latest News: ${title} by, ${author}: ${url} `, params);

        }

    });

}

function cryptoCompare(message) {

    var splitMessage = message.split("_");

    var coinSymbol = splitMessage[1];

    var apiKey = "325304ae213b719c3e278509d62858316beff21eff1661b0d86a7e3dae41d07e";

    axios.get(`https://min-api.cryptocompare.com/data/generateAvg?fsym=${coinSymbol}&tsym=USD&e=Kraken&api_key=${apiKey}`).then(response => {

        var coin = response.data.RAW.PRICE;

        var priceHigh = response.data.RAW.HIGH24HOUR;

        var priceLow = response.data.RAW.LOW24HOUR;

        const params = {

            icon_emoji: ':loudspeaker:'

        };

        bot.postMessageToChannel('general', `Price: $${coin}, High: $${priceHigh}, Low: $${priceLow}`, params);

    });

}

function helpMessage() {
    bot.postMessageToChannel('instacrypto', `Start your command by typing !news, !price Followed by _Value order. For example, "!news_2" The limit for news is 10, to call a price enter the Coin Symbol.`)
}



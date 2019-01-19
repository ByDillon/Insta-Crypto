


var url = 'https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=e887f0f933084c6ea3febbbc92745b61';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
//query to return mark price in USA, EUR and USD with amounts. No coin specific data
var apikey = '325304ae213b719c3e278509d62858316beff21eff1661b0d86a7e3dae41d07e'
//var marketAmounturl = `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=${apikey}`
//var streamingGeneralcoinInfourl =`https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=BTC,MLN,DASH&tsym=USD&api_key=${apikey}`
//var fullsymbolurl = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR&api_key=${apikey}`
//var averageMarketurl = `https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=Kraken&api_key=${apikey}`
//var averageMarketurl = `https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=Kraken&api_key=${apikey}`
var symbolArray = ["BTC", "ETH", "BCH"]
for (var i = 0; i < symbolArray.length; i++){
   var coinSymbol = symbolArray[i];
   console.log('coinsymbol ' + coinSymbol);
   var averageMarketurl = `https://min-api.cryptocompare.com/data/generateAvg?fsym=${coinSymbol}&tsym=USD&e=Kraken&api_key=${apikey}`
console.log('url ' + averageMarketurl)
   var url = averageMarketurl;
var req = new Request(url);
$.ajax({
   url: url,
   method: "GET"
 }).then(function(_Marketresponse) {
     console.log(_Marketresponse);
     var ptemplate = `<p> Articles:${_Marketresponse[i]} </p>`
     $('#second').append(ptemplate);
 })
};



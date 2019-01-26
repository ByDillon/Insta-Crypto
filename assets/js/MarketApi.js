//apikey provided by cryptocompare
var apikey = '325304ae213b719c3e278509d62858316beff21eff1661b0d86a7e3dae41d07e'
//array of coin symbols
var symbolArray = ["BTC", "ETH", "BCH", "XRP", "EOS","LTC", "USDT", "XLM", "TRX", "BSV", "ADA", "BNB", "MKR", "DASH", "NEO", "ETC", "ZEC", "WAVES", "XTZ", "BET", "BTG", "ONT", "ZIL", "LINK", "DCR", "REP", "BAT", "LSK", "HOT", "NANO", "BCD", "BCN", "ICX", "DDB", "BTS"]
//looping thru the symbolAarry to call the api for each coin to get the Market infomation.
for (var i = 0; i < symbolArray.length; i++){
   var coinSymbol = symbolArray[i];
   var averageMarketurl = `https://min-api.cryptocompare.com/data/generateAvg?fsym=${coinSymbol}&tsym=USD&e=Kraken&api_key=${apikey}`
   var url = averageMarketurl;
   var req = new Request(url);
   $.ajax({
      url: url,
      method: "GET"
   }).then(function(_Marketresponse) {
      const {FROMSYMBOL, PRICE,HIGH24HOUR,LOW24HOUR,CHANGE24HOUR} = _Marketresponse.DISPLAY  
      var $newRow =
         `<tr><td>${FROMSYMBOL}</td><td>${PRICE}</td><td>${HIGH24HOUR}</td><td>${LOW24HOUR}</td><<td>${CHANGE24HOUR}</td></tr>`
           $('#coinsBody').append($newRow);
          
 })
 
};




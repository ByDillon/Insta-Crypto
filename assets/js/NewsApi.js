
var apikey = "6bd40a7cdac8479ba618547b5afe8085"
var url = `https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=${apikey}`;
var req = new Request(url);
// loop thru the JSON object to build a paragraph showing the article's description and url leading to the article.
$.ajax({
    url: url,
    method: "GET"
  }).then(function(Newsresponse) {
    for (var i = 0 ; i < Newsresponse.articles.length; i++){
      const {description, url} = Newsresponse.articles[i]
      var ptemplate = `<p> Articles:${description} </p>
      <p><a href="${url}">${url}</a></p>`
      $('#first').append(ptemplate);
          
    }
  
  });

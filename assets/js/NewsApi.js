
var url = 'https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=6bd40a7cdac8479ba618547b5afe8085';
var req = new Request(url);
$.ajax({
    url: url,
    method: "GET"
  }).then(function(response) {
    console.log(response.articles);
    for (var i = 0 ; i < response.articles.length; i++){
    var ptemplate = `<p> Articles:${response.articles[i].content} </p>
    <p><a href="${response.articles[i].url}">${response.articles[i].url}</a></p>`
    console.log("here is the template")
    console.log(ptemplate);
    $('#first').append(ptemplate);
         
    }
  
  });

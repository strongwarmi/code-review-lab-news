'use strict'
const printNews = () => {
  const secNews = $("<section class='container'><div class='row'>"+
  "<div class='col-md-8 col-lg-8'>"+
  "<div class='col-md-2 col-lg-2'>"+
  "<img src='assets/img/authors/"+news.author.picture+"'></div>"+
  "<div class='col-md-6 col-lg-6'><p>"+news.author.name+"</p>"+
  "<p>"+ news['published-date'] +"</p><p>"+news.author.user+"</p></div></div></div>"+
  "<div class='row'><div class='col-md-8'>"+news.body+"</div></div></section>");

  return secNews;
}

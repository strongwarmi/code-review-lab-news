'use strict'
const printNews = (data) => {
  const secNews = $("<section class='container'><div class='row'>"+
  "<div class='col-md-8 col-lg-8'>"+
  "<div class='col-md-2 col-lg-2'>"+
  "<img src='assets/img/authors/"+data.author.picture+"'></div>"+
  "<div class='col-md-6 col-lg-6'><p>"+data.author.name+"</p>"+
  "<p>"+ data['published-date'] +"</p><p>"+data.author.user+"</p></div></div></div>"+
  "<div class='row'><div class='col-md-8'>"+data.body+"</div></div></section>");
  // if(state.screen == 1){
  //    $("body").append(secNews);
  // }
  return $("body").append(secNews);
}

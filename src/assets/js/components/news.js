'use strict'
const printNews = () => {
    const secNews = $('<section class="container"></section>');
    const row = $('<div class="row"></div>');
    const divNews = $('<div class="col-xs-12"></div>');
    const noticia = $('<div class="col-sm-8"><div class="row"><div class="col-xs-4 col-sm-2"><img src="assets/img/authors/' + news.author.picture + '"></div><div class="col-xs-8 col-sm-6"><p>' + news.author.name + '<br>' + news['published-date'] + '<br>' + news.author.user + '</p></div></div><div class="row">' + news.body + '</div></div>');

    const popular = $('<div class="col-sm-4"><h4 class="text-uppercase"><strong>notas relacionadas</strong></h4><div class="linea"></div><br>' +
    '<div class="row"><div class="col-xs-6"><img class="img-responsive" src="assets/img/foto-n3.png"><span>Laboratoria 2017 <br> título noticia</span></div>' +
    '<div class="col-xs-6"><img class="img-responsive" src="assets/img/foto-n4.png">     <span>Laboratoria 2017 <br> título noticia</span></div></div><br><br>' +
    '<h4 class="text-uppercase"><strong>más populares</strong></h4><div class="linea"></div><br>' +
    '<div class="popular"><div class="foto"><img src="assets/img/foto-n5.png"></div><div class="titulo"><p>Noticia más popular <br>Laboratoria Perú</p></div></div>' +
    '<div class="popular"><div class="foto"><img src="assets/img/foto-n6.png"></div><div class="titulo"><p>Noticia popular <br>Laboratoria Perú</p></div></div>' +
    '<div class="popular hidden-xs"><div class="foto"><img src="assets/img/foto-n7.png"></div><div class="titulo">     <p>Noticia más popular <br>Laboratoria Perú</p></div></div>' +
    '<div class="popular hidden-xs"><div class="foto"><img src="assets/img/foto-n8.png"></div><div class="titulo">        <h4>Noticia más popular <br>Laboratoria Perú</h4></div></div>' +
    '<div class="popular hidden-xs"><div class="foto"><img src="assets/img/foto-n9.png"></div><div class="titulo">          <h4>Noticia más popular <br>Laboratoria Perú</h4></div></div></div>');

    row.append(noticia);
    row.append(popular);
    divNews.append(row)
    secNews.append(divNews);

    return secNews;
}

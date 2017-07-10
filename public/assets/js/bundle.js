'use strict';

const render = (root) => {
    //root.empty();
    root.append(Header());
    
};

const state = {
    data:null,
    screen: null

};

$(_ => {
    const root = $('.root');
    render(root);
    console.log("hola");
    getnews();
});

'use strict';
const Header = () => {
    const header = $('<header class="container"></header>');
    
    const navDesktop = $('<div class="row hidden-xs head-item search"><div class="col-sm-2"><img src="assets/img/menu.png"> SECTIONS</div><div class="col-sm-2"><img src="assets/img/search.png"> SEARCH</div><div class="col-sm-2 col-sm-offset-6 redes"><img src="assets/img/fb.png"><img src="assets/img/tw.png"><img src="assets/img/in.png"></div></div><div class="row hidden-xs text-center head-item"><img src="assets/img/logoicon.png" alt=""><br><br><p>Lunes, Junio 12 de 2017 | <img src="assets/img/cloud.png"> 22°</p></div>');
    
    const menu = $('<div class="row menu hidden-xs"><ul><li>Lo último</li><li>Opinión </li><li>Cultura</li><li>Perú</li>     <li>Tecnologia</li><li>Mundo</li><li>Economía</li><li>Lifestyle</li><li>Deporte</li></ul></div>');
    
    const navMobile = $('<div class="row hidden-sm hidden-md hidden-lg nav-mobile"><div class="col-xs-8"><img src="assets/img/logoicon.png" class="text-left" alt="Laboratoria" height="30"></div><div class="col-xs-2 col-xs-offset-2"><img src="assets/img/menu.png" height="25"></div></div>');

    header.append(navDesktop);
    header.append(menu);
    header.append(navMobile);
    
    return header;
};

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

'use strict'
const getnews = ()=>{

  $.get("/api/news/0",(rs,rq)=>{
    if (rs!= null) {
      state.data = rs;
      console.log(state.data);
      printNews(state.data);
      // state.screen = 1;
    }else {
      console.log("error");
    }
  });

}

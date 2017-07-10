'use strict';

const render = (root) => {
    root.append(Header());

    $.get('api/news/0', function (response) {
      if(response != null){
        root.append(Cover(response));
      }
    });
};


$(_ => {
    const root = $('.root');
    render(root);
});


/** agregando section cover **/
const Cover = (data)=>{
  const containerCover = $('<section class="container"></section>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col-xs-12"><div class="cover__category">EDUCACIÓN</div><div class="cover__line"></div></div>');
  const item = $('<div class="cover__title">' + data.title + '</div>' +
      '<div class="row"><div class="col-xs-12 col-md-8 cover__subtitle">' + data.brief + '</div></div>' +
      '<img src="assets/img/foto-n1.png" alt="" class="cover__img hidden-xs">');

  containerCover.append(row);
  row.append(col);
  col.append(item);

  return containerCover;
};




'use strict';
const Header = () => {
    const header = $('<header class="container"></header>');
    
    const navDesktop = $('<div class="col-xs-12 hidden-xs head-item search"><div class="col-sm-3 col-md-2"><img src="assets/img/menu.png"> SECTIONS</div><div class="col-sm-2"><img src="assets/img/search.png"> SEARCH</div><div class="col-sm-2 col-sm-offset-5 col-md-offset-6 redes"><img src="assets/img/fb.png"><img src="assets/img/tw.png"><img src="assets/img/in.png"></div></div><div class="row hidden-xs text-center head-item"><img src="assets/img/logoicon.png" alt=""><br><br><p>Lunes, Junio 12 de 2017 | <img src="assets/img/cloud.png"> 22°</p></div>');
    
    const menu = $('<div class="row hidden-xs"><div class="col-xs-12 hidden-xs"><ul class="menu"><li>Lo último</li><li>Opinión </li><li>Cultura</li><li>Perú</li><li>Tecnologia</li><li>Mundo</li><li>Economía</li><li>Lifestyle</li><li>Deporte</li></ul></div></div>');
    
    const navMobile = $('<div class="row hidden-sm hidden-md hidden-lg nav-mobile"><div class="col-xs-8"><img src="assets/img/logoicon.png" class="text-left" alt="Laboratoria" height="30"></div><div class="col-xs-2 col-xs-offset-2"><img src="assets/img/menu.png" height="25"></div></div>');

    const line = $('<div class="col-xs-12 hidden-xs header-line"></div>');
    header.append(navDesktop);
    header.append(menu);
    header.append(navMobile);
    header.append(line);

    return header;
};

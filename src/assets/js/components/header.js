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

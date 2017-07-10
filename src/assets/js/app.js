'use strict';

const render = (root) => {
    root.append(Header());

    if(news != null){
      root.append(Cover());
      root.append(printNews());
    }
};

let news;


$(_ => {
  $.get('api/news/0', function (response) {
    news = response;
    const root = $('.root');
    render(root);
  });
});

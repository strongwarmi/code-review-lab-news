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


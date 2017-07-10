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
});

'use strict';

const render = (root) => {
    //root.empty();
    root.append(Header());

};

const state = {
    screen: null

};

$(_ => {
    const root = $('.root');
    render(root);
});


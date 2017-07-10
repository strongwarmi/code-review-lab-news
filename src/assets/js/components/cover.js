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



